import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    email: {
        type: String,
        reuire:true
    },
    items: {
        type: Object,
        require:true
    }
})
const Payment = mongoose.model('payment', PaymentSchema);
export default Payment;