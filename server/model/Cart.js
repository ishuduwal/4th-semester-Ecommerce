import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    email: {
        type: String,
        require:true
    },
    name: {
        type: String,
        require:true
    },
    items: {
        type: Object,
        require:true
    }
}, {timestamps:true})

const Cart = mongoose.model('cart', CartSchema);

export default Cart;
