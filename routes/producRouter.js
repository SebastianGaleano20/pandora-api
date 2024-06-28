import { Router } from 'express';
import res from 'express/lib/response';
import { v4 as uuidv4 } from 'uuid';

export const productRoutes = (PRODUCTS) => {
    const productRouter = Router();

    productRouter.route('/products')
    
    productRouter.get('/products', (_, res) => {
        return res.json(PRODUCTS);
    })
    productRouter.get('/products/:id', (req, res) => {
        const { id } = req.params;
        const product = PRODUCTS.find((product) => product.id === id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json(product);
    })
    productRouter.post('/products', (req, res) => {
        const newProduct = req.body;
        const products = structuredClone(PRODUCTS);
        products.push({
            id: uuidv4(),
            ...newProduct
        })
        return res.status(201).json(products);
    })
    productRouter.put('/products/:id', (req, res) => {
        const { id } = req.params;
        const products = structuredClone(PRODUCTS);
        const product = products.find((product) => product.id === id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        const updateProduct = req.body;
        const index = products.indexOf(product);
        products.splice(index, 1, { id: product.id, ...updateProduct })
        return res.status(200).json(products);
    })
    productRouter.delete('/products/:id', (req, res) => {
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
    return productRouter;
}