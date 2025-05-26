import NavLinks from "./navLinks";
import './header.css';
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    const useToggle = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('darkmode', !darkMode);
    }

    return (
        <div id="header">
            <h1><Link to="/">SMA</Link></h1>
            <nav id="nav">
                <NavLinks />
            </nav>
            <button onClick={useToggle}>{darkMode ? "🌙" : "☀️"}</button>
        </div>
    )
}
export default Header;