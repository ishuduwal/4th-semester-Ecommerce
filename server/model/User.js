import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    email: {
        type:String
    },
    password: {
        type:String
    }
})
const User = new mongoose.model("User", userSchema)
export default User