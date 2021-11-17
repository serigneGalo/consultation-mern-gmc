import './Navbar.css';
import React from "react"
import { Link } from "react-router-dom";

function Navbar() {

    return(
        <div>
            <div className='App'>
                <ul>
                    <Link to="/Accueil"><li>Home</li></Link>
                    <Link to="/Enregistrement"><li>Enregistrer patient</li></Link>
                    <Link to="/Liste"><li>Liste des patient</li></Link>
                </ul>
            </div>
        </div>

    )

}

export default Navbar;