import axios from "axios";
const URL = "http://localhost:5000/desktop"

export const GetDesktop = () => axios.get(URL);
export const AddDesktop = (desktop) => axios.post(`${URL}/`, desktop);
export const UploadDesktop = (desktop) => axios.post(`${URL}/upload`, desktop);
export const EditDesktop = (desktop) => axios.put(`${URL}/${desktop._id}`,desktop);
export const DeleteDesktop = (id) => axios.delete(`${URL}/${id}`);