import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/Cartwidget"

const NavBar = () => {
    return (
        <nav className="Navbar">
            <link to= "/"> 
            <h3>Becca pet shop</h3>
            </link>
            <div className="categories">
                <NavLink to= {"/category/Perros"} className={({ isActive})=> isActive ? "ActiveOption" : "Option"}>Perros/</NavLink>
                <NavLink to={"/category/Gatos"}className={({ isActive})=> isActive ? "ActiveOption" : "Option"}>Gatos/</NavLink>
                <NavLink to={"/category/Otros"}className={({ isActive})=> isActive ? "ActiveOption" : "Option"}>Otros</NavLink>
            </div>
        <CartWidget />
        </nav>
    )
}

export default NavBar