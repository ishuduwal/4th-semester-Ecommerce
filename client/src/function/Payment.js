import * as api from '../api/Payment'

export const GetPayment = async (username) => {
    try {
        const { data } = await api.GetPayment(username);
        return data;
    } catch (error) {
        console.error(error)
    }
}

export const GetAllPayment = async () => {
    try {
        const { data } = await api.GetAllPayment();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const AddPayment = async (payment) => {
    try {
        const { data } = await api.AddPayment(payment)
        return data;
    }catch(error) {
        console.error(error)
    }
}

export const VerfiyPayment = async (payment) => {
    try {
        const { data } = await api.VerfiyPaymet(payment)
        return data;
    } catch (error) {
        console.error(error)
    }
}