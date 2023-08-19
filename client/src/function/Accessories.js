import * as api from '../api/Accessories';

export const GetAccessories = async () => {
    try {
        const { data } = await api.GetAccessories();
        return data
    } catch (error) {
        console.log(error)
    }
}
export const AddAccessories = async (accessories) => {
    try {
        const { data } = await api.AddAccessories(accessories);
        return data;
    } catch (error){
        console.log(error);
    }
}