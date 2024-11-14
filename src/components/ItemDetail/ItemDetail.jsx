


const ItemDetail = ({id, name , img, price, description, stock}) => {
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
                        Categoria: {category}
                    </p>
                    <p className="info">
                        Descripcion: {description}
                    </p>
                    <p className="info">
                    Precio :${price}
                    </p>
                </section>
                <footer className="Itemfooter">
                <ItemCount initial={1} stock= {stock} onAdd ={(quantity) => console.log ("cantidad agregada")} />
                </footer>
                    
                    
            </header>
        </article>
    )
}