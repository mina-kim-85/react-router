import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "./../assets/css/style.css";

export default function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () =>setClick(!click);
    return (
        <header>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink to="/" className="nav-logo"><h1>Mina Kim</h1></NavLink>
                
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item"><NavLink to="/" className="nav-links" onClick={handleClick}>Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/about" className="nav-links" onClick={handleClick}>About</NavLink></li>
                        <li className="nav-item"><NavLink to="/projects" className="nav-links" onClick={handleClick}>Projects</NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" className="nav-links" onClick={handleClick}>Contact</NavLink></li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}