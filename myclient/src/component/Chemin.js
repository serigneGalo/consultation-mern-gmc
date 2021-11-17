import React from 'react';
import Accueil from './Accueil';
import Edit from './Edit'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Enregistrement from './Enresitrement';
import Liste from './Liste';

function Chemin() {
    return ( 
        <div>
            <Router>
                <Routes>
                        <Route path="/Accueil" exact element={<Accueil/>}/>                        <Route path="/Accueil" exact element={<Accueil/>}/>
                        <Route path="/" exact element={<Accueil/>}/>
                        <Route path="/Enregistrement" exact element={<Enregistrement/>}/>
                        <Route path="/Liste" exact element={<Liste/>}/>
                        <Route path="/Edit/:id" exact element={<Edit/>}/>
                </Routes>
            </Router>
        </div>
     )
}

export default Chemin;