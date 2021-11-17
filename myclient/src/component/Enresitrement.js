import './Enregistrement.css'
import {React, useState} from "react";
import { Form, Button } from "react-bootstrap";
import { addUser } from "../api";
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';


const initialValue = {
    prenom: '',
    nom: '',
    sexe: '',
    numero: '',
    age:'',
    adress:'',
    poids:'',
    pression_arterielle:'',
    symptome_1:'',
    symptome_2:'',
    symptome_3:''
}

function Enregistrement() {
    const [user, setUser] = useState(initialValue);
    const { prenom, nom, sexe, numero, age, adress, poids,pression_arterielle,symptome_1,symptome_2,symptome_3 } = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addPatient = async() => {
        await addUser(user);
        navigate.push('/all');

    }

    return ( 
        <div>
            <Navbar/>
            <Form className='formulaire'>
                <Form.Label> <h1>Formulaire d'inscription</h1> </Form.Label>
                <Form.Control type="text" placeholder="Entrer prenom" name='prenom' onChange={(e) => onValueChange(e)}/>
                <br/><br/>

                <Form.Control type="text" placeholder="Entrer nom" name='nom' onChange={(e) => onValueChange(e)}/>
                <br/><br/>

                <Form.Control type="text" placeholder="Entrer sexe" name='sexe' onChange={(e) => onValueChange(e)}/>
                <br/><br/>

                <Form.Control type="number" placeholder="Enter number" name='numero' onChange={(e) => onValueChange(e)}/>
                <br/><br/>

                <Form.Control type="number" placeholder="Entrer l'age" name='age' onChange={(e) => onValueChange(e)}/>
                <br /><br />

                <Form.Control type="text" placeholder="Entrer l'adresse" name='adress' onChange={(e) => onValueChange(e)}/>
                <br /><br />

                <Form.Control type="number" placeholder="Entrer le poids" name='poids' onChange={(e) => onValueChange(e)}/>
                <br /><br />

                <Form.Control type="number" placeholder="Entrer la pression artériellle" name='pression_arterielle' onChange={(e) => onValueChange(e)}/>
                <br /><br />

                <Form.Control type="text" placeholder="Entrer le 1eme symptome" name='symptome_1' onChange={(e) => onValueChange(e)}/>
                <br /><br />

                <Form.Control type="text" placeholder="Entrer le 2eme symptome" name='symptome_2' onChange={(e) => onValueChange(e)}/>
                <br /><br />
                
                <Form.Control type="text" placeholder="Entrer le 3eme symptome" name='symptome_3' onChange={(e) => onValueChange(e)}/>
                <br /><br />
                <Button variant="primary" className="button-53 btnSubmit" type="submit" onClick={()=>addPatient()}>Envoyer</Button>
                <br />
                <Button variant="primary" className="button-53 btnCancel" type="cancel">Annuler</Button>
      </Form>
        </div>
     )
}

export default Enregistrement;