import axios from "axios";
const URL = "http://localhost:5000/accessories"

export const GetAccessories = () => axios.get(URL);
export const AddAccessories = (accessories) => axios.post(`${URL}/`, accessories);
export const EditAccessories = (accessories) => axios.put(`${URL}/${accessories._id}`,accessories);
export const DeleteAccessories = (id) => axios.delete(`${URL}/${id}`);