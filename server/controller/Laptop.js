import Laptop from '../model/Laptop.js';

export const GetLaptop = async (req, res) => {
    try {
        const laptop = await Laptop.find()
        res.status(200).json(laptop)
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

export const AddLaptop = async (req, res) => {
    const { title, brand, cpu, graphics, ram, storage, weight, display, price } = req.body
    try {
        let laptop = await Laptop.findOne({ title: title })
        
        if (laptop) { res.status(200).json({ message: "Laptop already addded" }) }
        else {
            const newLaptop = new Laptop({
                title, brand, cpu, graphics, ram, storage, weight, display, price
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
        if (!id) {
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
