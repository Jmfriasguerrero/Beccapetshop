import CartWidget from "../CartWidget/Cartwidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Becca pet shop</h3>
            <div>
                <button>Perros</button>
                <button>Gatos</button>
                <button>Otros</button>
            </div>
        <CartWidget />
        </nav>
    )
}

export default NavBar