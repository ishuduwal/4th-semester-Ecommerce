import mongoose from 'mongoose';

const AccessoriesSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    category: {
        type: String,
        require:true
    },
    weight: {
        type: String,
        require: true
    },
    length: {
        type: String,
        require: true
    },
    connection: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})
const Accessories = new mongoose.model("Accessories", AccessoriesSchema);
export default Accessories;