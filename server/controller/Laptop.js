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