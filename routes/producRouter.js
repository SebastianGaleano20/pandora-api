import { Router } from 'express'; //Router de express a utilizar
import { productController } from '../controllers/productController.js'; //Controladores de mi api
import { schemaValidator } from '../middlewares/validations.js';
import { bodyProductSchema } from '../schemas/productSchema.js'

export const productRoutes = () => {
    const productRouter = Router(); //Creamos el router de mi app

    //Desestructuramos los controladores de mi aplicacion
    const { getProducts, createProduct, getProductById, deleteProduct, updateProduct } = productController();

    //Creamos las rutas (url) de mi aplicacion con sus respectivos metodos
    productRouter.route('/products')
        .get(getProducts)
        .post(schemaValidator(bodyProductSchema), createProduct)

    productRouter.route('/products/:id')
        .get(schemaValidator, getProductById)
        .patch(schemaValidator, updateProduct)
        .delete(schemaValidator, deleteProduct)

    return productRouter;
}