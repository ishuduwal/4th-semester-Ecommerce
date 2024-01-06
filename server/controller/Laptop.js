import Laptop from '../model/Laptop.js';
import mongoose from 'mongoose';

export const GetLaptop = async (req, res) => {
    try {
        const laptop = await Laptop.find()
        res.status(200).json(laptop)
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const AddLaptop = async (req, res) => {
    const { title, brand, cpu, graphics, ram, storage, weight, display, price, image } = req.body
    try {
        let laptop = await Laptop.findOne({ title: title })
        
        if (laptop) { res.status(200).json({ message: "Laptop already addded" }) }
        else {
            const newLaptop = new Laptop({
                title, brand, cpu, graphics, ram, storage, weight, display, price, image
            })
            await newLaptop.save()
            res.status(201).json({message: "Laptop added"})
        }
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const DeleteLaptop = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Laptop ID is missing in the request body' });
        }
        const laptop = await Laptop.findOneAndDelete({ _id: id });
        if (!laptop) {
            return res.status(404).json({ message: 'Laptop not found' });
        }
        res.status(200).json({ message: 'Laptop deleted successfully' });
    } catch (error) {
        console.error('Error deleting laptop:', error);
        res.status(500).json({ message: 'Error deleting laptop', error: error.message });
    }
};

export const EditLaptop = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, brand, cpu, graphics, ram, storage, weight, display, price, image } = req.body; 
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Laptop ID is missing or invalid' });
        }
        const updatedLaptop = await Laptop.findByIdAndUpdate(
            id,
            { title, brand, cpu, graphics, ram, storage, weight, display, price, image },
            { new: true } 
        );
        if (!updatedLaptop) {
            return res.status(404).json({ message: 'Laptop not found' });
        }
        res.status(200).json({ message: 'Laptop updated successfully', laptop: updatedLaptop });
    } catch (error) {
        console.error('Error updating laptop:', error);
        res.status(500).json({ message: 'Error updating laptop', error: error.message });
    }
};

