import { NavLink } from "react-router-dom";
import './navLinks.css'

const NavLinks = () => {
    return (
        <ul id="nav-links">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/projects">Project</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    )
}
export default NavLinks;