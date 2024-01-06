import Cart from "../model/Cart.js";


export const GetCart = async (req, res) => {
    const email = req.body.email;
    try {
        const cart = await Cart.findOne({email});
        res.status(200).json(cart.items);
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

export const GetAllCart = async (req, res) => {
    try {
        const cart = await Cart.find();
        res.status(200).json(cart);
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

export const AddCart = async (req, res) => {
    const cart = req.body;
    try {
        const isCart = await Cart.findOne({ email: cart.email });
        if (isCart) {
            await Cart.findOneAndUpdate( {email:cart.email},{items:cart.items }); 
            res.status(201).json(cart);
        } else {
            const cart = new Cart(req.body);
            await cart.save();  
            res.status(201).json("added");
        }
        
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}


export const DeleteCart = async (req, res) => {
    const data = req.body;

    let carts = await Cart.find({email:data.email});
    let items;
    carts.map(item => items = item.items);
    try {
        let filteredItems = items.filter(item => item._id !== data.id);
        await Cart.findOneAndUpdate( {email:data.email},{items:filteredItems}); 
        res.status(200).json(true);
      
    } catch (error) {
        console.error('Error deleting cart:', error);
        res.status(500).json(false);
    }
};

