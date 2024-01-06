import productsData from '../data/Products.js';

export const search = (req, res) => {
    const query = req.query && req.query.query ? req.query.query.toLowerCase() : '';

    const searchResults = productsData.filter((product) => {
        const title = product.Title ? product.Title.toLowerCase() : '';
        const brand = product.Brand ? product.Brand.toLowerCase() : '';
        const cpu = product.CPU ? product.CPU.toLowerCase() : '';

        return title.includes(query) || brand.includes(query) || cpu.includes(query);
    });

    res.json({ results: searchResults });
};

export default search;
