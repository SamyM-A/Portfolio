import NavLinks from "./navLinks";
import './header.css';

const Header = () => {
    return (
        <div id="header">
            <h1>SMA</h1>
            <nav id="nav">
                <NavLinks />
            </nav>
        </div>
    )
}
export default Header;