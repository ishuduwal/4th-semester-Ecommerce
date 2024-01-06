import axios from "axios"
const URL = "http://localhost:5000/cart"

export const GetCart = (username) => axios.post(`${URL}/get`,username);

export const GetAllCart = () => axios.post(`${URL}/getallcart`);

export const AddCart = (cart) => axios.post(`${URL}/add`, cart);

export const DeleteCart = (items) => axios.post(`${URL}/delete`, items);