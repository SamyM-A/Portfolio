import "../App.css"
import { useState } from "react";

const Header = ({ scrollTo }) => {

    const [open, setOpen] = useState(false);

    return (
        <div id="header">
            <div id='h1'>
                {/* <h1>SMA</h1> */}
                <a href="https://github.com/SamyM-A/Portfolio" target="_blank">SMA</a>
            </div>
            <div id='h2' className={open ? "open" : ""}>
                <button onClick={() => scrollTo("accueil")}>Accueil</button>
                <button onClick={() => scrollTo("technologie")}>Technologie</button>
                <button onClick={() => scrollTo("projects")}>Projects</button>
                {/* <button onClick={() => scrollTo("cv")}>CV</button> */}
                <button onClick={() => scrollTo("contact")}>Contact</button>
            </div>
            <button id="burger" onClick={() => setOpen(!open)}>
                ☰
            </button>
        </div>
    )
}
export default Header;