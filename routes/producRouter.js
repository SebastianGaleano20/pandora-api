import { Router } from 'express'; //Router de express a utilizar
import { productController } from '../controllers/productController.js'; //Controladores de mi api
import { validateProduct } from '../middlewares/validations.js';

export const productRoutes = () => {
    const productRouter = Router(); //Creamos el router de mi app

    //Desestructuramos los controladores de mi aplicacion
    const { getProducts, createProduct, getProductById, deleteProduct, updateProduct } = productController();

    //Creamos las rutas (url) de mi aplicacion con sus respectivos metodos
    productRouter.route('/products')
        .get(getProducts)
        .post(validateProduct, createProduct)

    productRouter.route('/products/:id')
        .get(getProductById)
        .patch(validateProduct, updateProduct)
        .delete(deleteProduct)
    return productRouter;
}