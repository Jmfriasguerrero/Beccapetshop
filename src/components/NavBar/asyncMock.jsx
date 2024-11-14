const products = [
{
    id: "1" ,
    name: "Proplan",
    price: "1000",
    category: "Perros",
    Img: "https://www.purina.com.ar/sites/default/files/styles/simple_card/public/2022-08/adult_pro_plan.png.webp?itok=LRbOLUgB ",
    stock: "20",
    description: "descripcion de propan adultos"
    },
    {id: "2", name:"royal canin", price:"800", category:"Gatos", img:"https://www.royalcanin.com/ar/cats/products/retail-products/kitten-gravy-4058", stock:"10", description:"descripcion de royal canin para gatos jovenes" },
    {id: "3", name: "alpiste para aves", price:"1200", category: "otros", img:"https://www.puppis.com.ar/alpiste-para-aves-nelsoni-ranch-x750gr/p#750Gr",stock:"6", description:"descripcion de alpiste para aves"},
] 

export const getProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}
export const getProductsbyid= (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(product.find(prod =>prod.id === productId))
        },500)
    })
}