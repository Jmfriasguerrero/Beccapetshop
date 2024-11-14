import "./item.css"

const Item = ({id, name , img, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
                <picture>
                <img src={img} alt={name} className="ItemImg"/>
                </picture>
                <section>
                    <p className="info">
                        precio: ${price}
                    </p>
                    <p className="info">
                    Stock disponible : {stock}
                    </p>
                </section>
                <footer className="Itemfooter">
                    <link to= {"/item/${id}"} className="option">Ver detalle</link>
                </footer>
                    
                    
            </header>
        </article>
    )
}

export default Item