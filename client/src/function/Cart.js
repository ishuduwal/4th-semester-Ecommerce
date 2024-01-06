import * as api from '../api/Cart'

export const GetCart = async (username) => {
    try {
        const { data } = await api.GetCart(username);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const GetAllCart = async () => {
    try {
        const { data } = await api.GetAllCart();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const AddCart = async (cart) => {
    try {
        const { data } = await api.AddCart(cart);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const DeleteCart = async (cart) => {
    try {
        const { data } = await api.DeleteCart(cart);
        return data;
    } catch (error) {
        console.log(error);
    }
}