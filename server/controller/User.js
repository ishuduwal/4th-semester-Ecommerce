import User from '../model/User.js'

export const GetUser = async (req,res)=>{
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json({message:error.message})
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
