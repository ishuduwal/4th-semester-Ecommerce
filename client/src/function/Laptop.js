import * as api from '../api/Laptop';

export const GetLaptop = async () => {
    try {
        const { data } = await api.GetLaptop();
        return data
    } catch (error) {
        console.log(error)
    }
}
export const AddLaptop = async (laptop) => {
    try {
        const { data } = await api.AddLaptop(laptop);
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const DeleteLaptop = async (id) => {
    
}