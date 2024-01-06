import mongoose from "mongoose";

const DesktopSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    weight: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    ram: {
        type: String,
        require: true
    },
    graphics: {
        type: String,
        require: true
    },
    storage: {
        type: String,
        require: true
    },
    cpu: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    }
})
const Desktop = new mongoose.model("Desktop", DesktopSchema);
export default Desktop;