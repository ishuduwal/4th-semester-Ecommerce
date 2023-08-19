import Desktop from '../model/Desktop.js';

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