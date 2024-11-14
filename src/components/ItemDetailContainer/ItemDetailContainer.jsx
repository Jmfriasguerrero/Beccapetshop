import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import {getProductsbyid} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
    const [products , SetProducts] = useState(null)

    const{ItemId} = useParams()

    useEffect (()=> {
        getProductsbyid("1")
        .then(Response => {
            SetProducts(Response)
        })
        .catch (error => {
            console.error(error)
        })
    }, [] )  
    
        return (
            <div className="ItemDetailContainer">
            <itemdetail {...products} />
            </div>
        )
    
    }
    export default ItemDetailContainer
