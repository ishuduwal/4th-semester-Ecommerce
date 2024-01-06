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
export const UploadAccessories = async (accessories) => {
    try {
        const { data } = await api.UploadAccessories(accessories);
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const EditAccessories = async (updatedData) => {
    try {
        const { data } = await api.EditAccessories(updatedData);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const DeleteAccessories= async (accessorieId) => {
    try {
        const { data } = await api.DeleteAccessories(accessorieId);
        return data;
    } catch(error) {
        console.log(error);
    }
}