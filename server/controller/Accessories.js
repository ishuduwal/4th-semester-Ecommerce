import Accessories from '../model/Accessories.js';
import mongoose from 'mongoose';
export const GetAccessories = async (req, res) => {
    try {
        const accessories = await Accessories.find()
        res.status(200).json(accessories)
    } catch (error){
        res.status(401).json({message:error.message})
    }
}

export const AddAccessories = async (req, res) => {
    const { title, category, weight, length, connection, price } = req.body
    try {
        let accessories = await Accessories.findOne({ title: title })
        if (accessories) { res.status(200).json({ message: "Accessories already added" }) }
        else {
            const newAccessories = new Accessories({
                title, category, weight, length, connection, price
            })
            await newAccessories.save()
            res.status(201).json({message:"Accessories added"})
        }
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const DeleteAccessories = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({message:'Accessorie ID is missing'})
        }
        const accessorie = await Accessories.findOneAndDelete({ _id: id });
        if (!accessorie) {
            return res.status(404).json({message:'Accessorie not found'})
        }
        res.status(200).json({message:'Accessorie deleted sucessfully'})
    } catch (error) {
        console.error('error deleting accessorie:', error)
        res.status(500).json({message:'Error deleting accessorie',error:error.message})
    }
}