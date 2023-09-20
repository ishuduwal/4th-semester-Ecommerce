import axios from "axios";
const URL = "http://localhost:5000/desktop"

export const GetDesktop = () => axios.get(URL);
export const AddDesktop = (desktop) => axios.post(`${URL}/`, desktop);
export const DeleteDesktop = (id) => axios.delete(`${URL}/${id}`);