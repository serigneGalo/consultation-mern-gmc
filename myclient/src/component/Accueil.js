import React from "react";
import "./Accueil.css"
import { Link } from "react-router-dom";

function Accueil() {
    return ( 
        <div className='centredLink'>
            <br/>
            <br/>
            <Link to="/Enregistrement">
                <button className="button-53" role="button">Enregistrer un patient</button>
            </Link>
            <br/>
            <br/>

            <Link to="/Liste">
                <button className="button-53" role="button">Voir liste des patients</button>
            </Link>

        </div>
     )
}

export default Accueil;