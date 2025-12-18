import "../App.css"
import { useState } from "react";

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div id="header">
            <div id='h1'>
                <h1>SMA</h1>
            </div>
            <div id='h2'>
                <button onClick={() => scrollTo("accueil")}>Accueil</button>
                <button onClick={() => scrollTo("about")}>About</button>
                <button onClick={() => scrollTo("contact")}>Contact</button>
            </div>
        </div>
    )
}
export default Header;