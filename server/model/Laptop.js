import mongoose from "mongoose";

const LaptopSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    cpu: {
        type: String,
        require: true
    },
    graphics: {
        type: String,
        require: true
    },
    ram: {
        type: String,
        require: true
    },
    storage: {
        type: String,
        require: true
    },
    weight: {
        type: String,
        require: true
    },
    display: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})
const Laptop = new mongoose.model("Laptop", LaptopSchema);
export default Laptop;
