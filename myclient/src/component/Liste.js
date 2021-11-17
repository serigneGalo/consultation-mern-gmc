import React, { useState, useEffect} from "react";
import { deleteUser } from "../api";
import axios from 'axios';
import { Link } from "react-router-dom";
import './Liste.css';
import Navbar from "./Navbar";

function Liste() {

/*    const [users, setUsers] = useState();

     const getAllUsers = async (user) => {
        let response = await getUsers(user);
        setUsers(response.data);
    }
    console.log(typeof users);

    useEffect(() => {
        getAllUsers();
    }, []); */

    const [listOfUser,setListOfUser]= useState([])
    const fetchData= async()=>{
      const result= await axios(
        'http://localhost:8080/api/all'
      )
      setListOfUser(result.data)
    }
    useEffect(()=>{
      fetchData()
    }, []);

    console.log(listOfUser.patients);
    
    const deleteOneUser= async(_id)=>{
        await deleteUser(_id)
    }
    
    return (
        <div>
            <Navbar/>
             <table>
                <tbody>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Sexe</th>
                        <th>Numero</th>
                        <th>Age</th>
                        <th>Adress</th>
                        <th>Poids</th>
                        <th>Pression Arterielle</th>
                        <th>Symptome 1</th>
                        <th>Symptome 2</th>
                        <th>Symptome 3</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>  
                {listOfUser.map((user, index) => (
                    <tr key={index}>
                        <td>{user.nom}</td>
                        <td>{user.prenom}</td>
                        <td>{user.sexe}</td>
                        <td>{user.numero}</td>                            
                        <td>{user.age}</td>
                        <td>{user.address}</td>
                        <td>{user.poids}</td>
                        <td>{user.pression_arterielle}</td>
                        <td>{user.symptome_1}</td>
                        <td>{user.symptome_2}</td>
                        <td>{user.symptome_3}</td>
                        <td>
                            <Link to={{pathname:`/Edit/${user._id}`, state: user}}>
                                <button className="button-53 btnEdit" role="button" >Edit</button>
                            </Link>
                        </td>
                        <td><button className="button-53 btnDelete" role="button" onClick={()=>deleteOneUser(user._id)}>delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* {users.map((user) => (
                <div>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.username}</div> 
                    <div>{user.email}</div> 
                    <div>{user.phone}</div> 
                </div>               
            ))} */}
            
    </div>
     )
}

export default Liste;


































/* import axios from 'axios';
import React, { useEffect, useState } from "react";

function Liste() {
    const [listOfUser,setListOfUser]= useState([])
    const fetchData= async()=>{
      const result= await axios.get(
        'http://localhost:8080/api/all'
      )
      setListOfUser(result.data)
    }
    useEffect(()=>{
      fetchData()
    })
    const listArray=Object.values(listOfUser)
    return ( 
        <div className="App">
         <table>
          <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Adresse</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        
            {listArray.map((user, index) => (
              <tr key={index}>
                <td><div>{user[index].sexe}</div></td>
                <td><div>{user[3].nom}</div></td>
                {console.log()}
              </tr>
          
          ))}
          </tbody>
          </table>
      </div>
     )
}

export default Liste;


{listArray.map((user, index)=>(<div key={index}>{user.prenom}</div>))}

 user[index].nom */