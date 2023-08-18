import * as api from '../api/User'

export const Register =async (user)=>{
try {
    const {data} =await api.Signup(user);
    return data
} catch (error) {
    console.log(error)
}
}
export const Login = async (user) => {
    try{
        const { data } = await api.Login(user);
        return data;
    } catch (error) {
        console.log(error);
    }
}