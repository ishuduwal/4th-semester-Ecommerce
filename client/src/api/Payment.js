import axios from "axios";
const URL = "http://localhost:5000/payment"

export const GetPayment = (username) => axios.post(`${URL}/get`, username);
export const GetAllPayment = () => axios.post(`${URL}/getallpayment`);
export const AddPayment = (payment) => axios.post(`${URL}/add`, payment);
export const VerfiyPaymet = (payment) => axios.post(`${URL}/verify`, payment);