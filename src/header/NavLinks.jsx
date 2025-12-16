import { NavLink } from "react-router-dom";
import './navLinks.css'

const NavLinks = () => {
    return (
        <ul id="nav-links">
            <li>
                <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
                <NavLink to="/projets">Projets</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    )
}
export default NavLinks;