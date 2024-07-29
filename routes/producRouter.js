import { Router } from 'express'; //Router de express a utilizar
import { productController } from '../controllers/productController.js'; //Controladores de mi api
import { schemaValidator } from '../middlewares/validations.js';
import { bodyProductSchema, idProductSchema, updateProductSchema } from '../schemas/productSchema.js'
import { isAdmin } from '../middlewares/checkRole.js';

export const productRoutes = () => {
    const productRouter = Router(); //Creamos el router de mi app

    //Desestructuramos los controladores de mi aplicacion
    const { getProducts, createProduct, getProductById, deleteProduct, updateProduct } = productController();

    //Creamos las rutas (url) de mi aplicacion con sus respectivos metodos
    productRouter.route('/products')
        .get(getProducts)
        .post(isAdmin, schemaValidator(bodyProductSchema), createProduct)

    productRouter.route('/products/:id')
        .get(schemaValidator(idProductSchema), getProductById)
        .patch(isAdmin, schemaValidator(updateProductSchema), updateProduct)
        .delete(isAdmin, schemaValidator(idProductSchema), deleteProduct)

    return productRouter;
}
