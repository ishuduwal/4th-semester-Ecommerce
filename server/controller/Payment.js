import Payment from "../model/Payment.js";
import {Stripe} from "stripe";
import Cart from "../model/Cart.js"
const stripe = Stripe("sk_test_51OhkzYEE46R4eqNzGv8rBKx239kfmEqhmFQCjnSENUojhw5wcRvO2clghPC2JcaQnjncr2lTPxn6KFGxXaWHSE7P00CltTd6v7")

export const GetPayment = async (req, res) => {
    const email = req.body.email;
    try {
        const payment = await Payment.findOne({ email });
        res.status(200).json(payment.items);
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}


export const GetAllPayment = async (req, res) => {
    try {
        const payment = await Payment.find();
        res.status(200).json(payment);
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

export const AddPayment = async (req, res) => {
    const data = req.body;
    try {
        const payment = new Payment(req.body);
        await payment.save() && await Cart.findOneAndDelete({email:data.email});
        res.status(201).json("payment done!!")
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

export const VerifyPayment = async (req, res) => {
    const { email, items } = req.body;

    const lineItems = [];
    for (let i in items) {
        console.log(items[i])
        lineItems.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: items[i].title,
                },
                unit_amount:+items[i].price
            },
            quantity:items[i].quantity
        })
    }
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: lineItems,
            success_url: `http://localhost:3000/cart/success`,
            cancel_url: `http://localhost:3000/cart`,
        });
        res.status(200).json({url:session.url})
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}