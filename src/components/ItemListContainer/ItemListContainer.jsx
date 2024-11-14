import { useEffect, useState } from "react"
import {getProducts} from "../NavBar/asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting} ) => {
    const [products , SetProducts] = useState([])

    const {categoryId} = useParams()

useEffect (()=> {
    const asyncfunc = categoryId ? getProductsByCategory : getProducts 

    asyncfunc (categoryId)
    .then(response => {
        SetProducts(response)
    })
    .catch(error=> {
        console.error(error)
    })
},[categoryId])


    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )

}
export default ItemListContainer