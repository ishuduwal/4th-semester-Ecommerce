import mongoose from 'mongoose'
import User from '../model/User.js'

export const GetUser = async (req,res)=>{
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}

export const DeleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'user id missing' });
        }
        const user = await User.findOneAndDelete({ _id: id });
        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }
        res.status(200).json({ message: 'user deleted sucessfully' });
    } catch (error) {
            console.error('error deleting user:', error);
            res.status(500).json({ message: 'Error deleting user', error: error.message });
        }
}

export const EditUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'User id is missing' });
        }
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email, password },
            {new:true}
        )
        if (!updatedUser) {
            return res.status(404).json({message:'user not found'})
        }
        res.status(200).json({message:'user updated sucessfully', user: updatedUser})
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({message:'error updating user', error:error.message})
    }
}

export const Signup = async (req,res) =>{
    const { name, email, password } = req.body
    try {
        let user = await User.findOne({email:email});

        if(user) {res.status(200).json({message:"User already Registered"})}
        else{
            const newUser = new User({
                name,
                email,
                password
            })
            await newUser.save()
            res.status(201).json({ message: "Sucessfully Registered"})
        }
           
    } catch (error) {
        res.status(401).json({message:error.message})
    }          
}

export const Login = async (req, res) => {
    const user = req.body;
    try{
        const userDB = await User.findOne({ email: user.email, password: user.password })
        if (!userDB) return res.status(404).json(false);
        res.status(201).json(userDB.name);
    }catch (error){
        res.status(404).json(false);
    }
}
