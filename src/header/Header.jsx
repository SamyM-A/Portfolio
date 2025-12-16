import NavLinks from "./navLinks";
import './header.css';
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div id="header">
            <h1><Link to="/">SMA</Link></h1>
            <nav id="nav">
                <NavLinks />
            </nav>
        </div>
    )
}
export default Header;