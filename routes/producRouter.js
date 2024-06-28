import { Router } from 'express';
import { productController } from '../controllers/productController.js';

export const productRoutes = (PRODUCTS) => {
    const productRouter = Router();
    const { getProducts, createProduct } = productController(PRODUCTS);
    productRouter.route('/products')
        .get(getProducts)
        .post(createProduct)

    productRouter.route('/products/:id')
        .get((req, res) => {
            const { id } = req.params;
            const product = PRODUCTS.find((product) => product.id === id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            return res.status(200).json(product);
        })
        .put((req, res) => {
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
        .delete((req, res) => {
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