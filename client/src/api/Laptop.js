import axios from "axios";
const URL = "http://localhost:5000/laptop"

export const GetLaptop = () => axios.get(URL);
export const AddLaptop = (laptop) => axios.post(`${URL}/`, laptop);
export const DeleteLaptop = (id) => axios.delete(`${URL}/id`);
