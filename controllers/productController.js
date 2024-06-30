import { v4 as uuidv4 } from 'uuid';

export const productController = (PRODUCTS) => {
    const getProducts = ((_request, response) => {
        return response.json(PRODUCTS);
    });
    const createProduct = ((request, response) => {
        const newProduct = request.body;
        const products = structuredClone(PRODUCTS);
        products.push({
            id: uuidv4(),
            ...newProduct
        })
        return response.status(201).json(products);
    })
    const getProductById = ((request, response) => {
        const { id } = request.params;
        const product = PRODUCTS.find((product) => product.id === id);
        if (!product) {
            return response.status(404).json({ message: 'Product not found' });
        }
        return response.status(200).json(product);
    })
    const updateProduct = ((request, response) => {
        const { id } = request.params;
        const products = structuredClone(PRODUCTS);
        const product = products.find((product) => product.id === id)
        if (!product) {
            return response.status(404).json({ message: 'Product not found' })
        }
        const updateProduct = request.body;
        const index = products.indexOf(product);
        products.splice(index, 1, { id: product.id, ...updateProduct })
        return response.status(200).json(products);
    })
    const deleteProduct = ((req, res) => {
        const { id } = req.params;
        const products = structuredClone(PRODUCTS);
        const product = products.find((product) => product.id === id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        const index = products.indexOf(product)
        products.splice(index, 1)
        return res.status(200).json(products);
    })
    return {
        getProducts,
        createProduct,
        getProductById,
        deleteProduct,
        updateProduct
    }
}