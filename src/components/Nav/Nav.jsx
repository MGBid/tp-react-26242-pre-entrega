import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
    return <>
    <nav>
        <ul className="nav-list">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/cart"}>Carrito</Link></li>
            <li><Link to={"/mision-vision"}>Misión & Visión</Link></li>
            <li><Link to={"/about-us"}>Quienes somos</Link></li>
        </ul>
    </nav>
    </>
}