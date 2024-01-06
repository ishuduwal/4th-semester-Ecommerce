import axios from "axios";
const URL = "http://localhost:5000/laptop"

export const GetLaptop = () => axios.get(URL);
export const AddLaptop = (laptop) => axios.post(`${URL}/`, laptop);
export const UploadLaptop = (laptop) => axios.post(`${URL}/upload`, laptop);
export const EditLaptop = (laptop) => axios.put(`${URL}/${laptop._id}`,laptop);
export const DeleteLaptop = (id) => axios.delete(`${URL}/${id}`);

