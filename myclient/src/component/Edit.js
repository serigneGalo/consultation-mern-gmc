import React, {useEffect, useState} from 'react';
import { Form, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { editUser, getUsers } from "../api";
import { useNavigate } from 'react-router-dom';
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

function Edit() {

    const [user, setUser] = useState([]);
    const { prenom, nom, sexe, numero, age, adress, poids,pression_arterielle,symptome_1,symptome_2,symptome_3 } = user;
    const { _id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(_id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(_id, user);
        navigate.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return ( 
        <div >
            <Navbar/>
        <Form className='formulaire'>
            <Form.Label> <h1>Modifier information du patient</h1> </Form.Label>

            <input onChange={(e) => onValueChange(e)} placeholder='prenom modifie' name='prenom' value={prenom} id="my-input" aria-describedby="my-helper-text" />
            <br/><br/>

            <input onChange={(e) => onValueChange(e)} placeholder='nom modifie' name='nom' value={nom} id="my-input" aria-describedby="my-helper-text" />
            <br/><br/>

            <input onChange={(e) => onValueChange(e)} placeholder='sexe modifie' name='sexe' value={sexe} id="my-input" aria-describedby="my-helper-text" />
            <br/><br/>

            <input onChange={(e) => onValueChange(e)} placeholder='numero modifie' name='numero' type="number" value={numero} id="my-input" aria-describedby="my-helper-text" />
            <br/><br/>

            <input onChange={(e) => onValueChange(e)} name='age' placeholder='age modifie' type="number" value={age} id="my-input" aria-describedby="my-helper-text" />
            <br /><br />

            <input onChange={(e) => onValueChange(e)} name='adress' placeholder='adress modifie' value={adress} id="my-input" aria-describedby="my-helper-text" />
            <br /><br />

            <input onChange={(e) => onValueChange(e)} name='poids' type="number" placeholder='poids modifie' value={poids} id="my-input" aria-describedby="my-helper-text" />
            <br /><br />

            <input onChange={(e) => onValueChange(e)} name='pression_arterielle' placeholder='pression arterielle modifie' type="number" value={pression_arterielle} id="my-input" aria-describedby="my-helper-text" />
            <br /><br />

            <input onChange={(e) => onValueChange(e)} name='symptome_1' placeholder='symptome 1 modifie' value={symptome_1} id="my-input" aria-describedby="my-helper-text" />
            <br /><br />

            <input onChange={(e) => onValueChange(e)} name='symptome_2' placeholder='symptome 2 modifie' value={symptome_2} id="my-input" aria-describedby="my-helper-text" />
            <br /><br />
            
            <input onChange={(e) => onValueChange(e)} name='symptome_3' placeholder='symptome 3 modifie' value={symptome_3} id="my-input" aria-describedby="my-helper-text" />
            <br /><br />
            <Button variant="primary" type="submit" className="button-53" role="button" onClick={()=>editUserDetails()}>Modifier</Button>
            <br/>
            <Button variant="primary" className="button-53" role="button" type="cancel">Annuler</Button>
        </Form>
    </div>
     )
}

export default Edit;