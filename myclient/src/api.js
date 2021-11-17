import axios from 'axios';

const usersUrl = 'http://localhost:8080/api';

 export const getUsers = async () => {
    return await axios.get(`${usersUrl}/all`)
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteUser = async (_id) => {
    return await axios.delete(`${usersUrl}/delete/${_id}`);
}

export const editUser = async (_id, user) => {
    return await axios.put(`${usersUrl}/update/${_id}`, user)
}