import axios from "axios"
const URL = "http://localhost:5000/user"

export const GetUser = () => axios.get(URL);
export const DeleteUser = (id) => axios.delete(`${URL}/${id}`);
export const Signup = (user)=>axios.post(`${URL}/signup`,user)
export const Login = (user)=>axios.post(`${URL}/login`,user);