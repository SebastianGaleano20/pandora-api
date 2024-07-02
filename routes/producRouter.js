import { Router } from 'express'; //Router de express a utilizar
import { productController } from '../controllers/productController.js'; //Controladores de mi api

export const productRoutes = (PRODUCTS) => {
    const productRouter = Router(); //Creamos el router de mi app
    //Desestructuramos los controladores de mi aplicacion
    const { getProducts, createProduct, getProductById, deleteProduct, updateProduct } = productController(PRODUCTS);
    //Creamos las rutas (url) de mi aplicacion con sus respectivos metodos
    productRouter.route('/products')
        .get(getProducts)
        .post(createProduct)

    productRouter.route('/products/:id')
        .get(getProductById)
        .put(updateProduct)
        .delete(deleteProduct)
    return productRouter;
}