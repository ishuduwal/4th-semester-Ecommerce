import Accessories from '../model/Accessories.js';

export const GetAccessories = async (req, res) => {
    try {
        const accessories = await Accessories.find()
        res.status(200).json(accessories)
    } catch (error){
        res.status(401).json({message:error.message})
    }
}

export const AddAccessories = async (req, res) => {
    const { title, brand, weight, length, connection, price } = req.body
    try {
        let accessories = await Accessories.findOne({ title: title })
        if (accessories) { res.status(200).json({ message: "Accessories already added" }) }
        else {
            const newAccessories = new Accessories({
                title, brand, weight, length, connection, price
            })
            await newAccessories.save()
            res.status(201).json({message:"Accessories added"})
        }
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}