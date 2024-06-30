import { Router } from 'express';
import { productController } from '../controllers/productController.js';

export const productRoutes = (PRODUCTS) => {
    const productRouter = Router();
    const { getProducts, createProduct, getProductById, deleteProduct, updateProduct } = productController(PRODUCTS);
    productRouter.route('/products')
        .get(getProducts)
        .post(createProduct)

    productRouter.route('/products/:id')
        .get(getProductById)
        .put(updateProduct)
        .delete(deleteProduct)
    return productRouter;
}