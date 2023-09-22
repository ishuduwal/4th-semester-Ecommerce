import Desktop from '../model/Desktop.js';
import mongoose from 'mongoose';

export const GetDesktop = async (req, res) => {
    try {
        const desktop = await Desktop.find()
        res.status(200).json(desktop)
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const AddDesktop = async (req, res) => {
    const { title, cpu, graphics, ram, storage, weight, price } = req.body
    try {
        let desktop = await Desktop.findOne({ title: title })
        
        if (desktop) { res.status(200).json({ message: "Desktop already added" }) }
        else {
            const newDesktop = new Desktop({
                title, cpu, graphics, ram, storage, weight, price
            })
            await newDesktop.save()
            res.status(201).json({message:"Desktop added"})
        }
    } catch(error) {
        res.status(401).json({message: error.message})
    }
}

export const DeleteDesktop = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({message:'Desktop id is missing'})
        }
        const desktop = await Desktop.findOneAndDelete({ _id: id });
        if (!desktop) {
            return res.status(404).json({message:'desltop not found'})
        }
        res.status(200).json({message:'Desktop deleted sucessfully'})
    } catch (error) {
        console.error('Error deleting laptop:', error);
        res.status(500).json({message:'Error deleting laptop',error:error.message})
    }
}

export const EditDesktop = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, cpu, graphics, ram, storage, weight, price } = req.body; 
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'desktop id is missing' });
        }
        const updatedDesktop = await Desktop.findByIdAndUpdate(
            id,
            { title, cpu, graphics, ram, storage, weight, price },
            { new: true } 
        );
        if (!updatedDesktop) {
            return res.status(404).json({ message: 'desktop not found' });
        }
        res.status(200).json({ message: 'desktop updated sucessfully', desktop: updatedDesktop });
    } catch (error) {
        console.error('Error updating desktop:', error);
        res.status(500).json({ message: 'Error updating desktop', error: error.message });
    }
};