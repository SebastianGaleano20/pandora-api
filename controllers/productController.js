import { v4 as uuidv4 } from 'uuid';

export const productController = (PRODUCTS) => {
    const getProducts = ((_request, response) => {
        return response.json(PRODUCTS);
    });

    const createProduct = ((req, res) => {
        const newProduct = req.body;
        const products = structuredClone(PRODUCTS);
        products.push({
            id: uuidv4(),
            ...newProduct
        })
        return res.status(201).json(products);
    })
    
    return {
        getProducts,
        createProduct
    }
}