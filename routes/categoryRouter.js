import { Router } from 'express';
import { categoryController } from '../controllers/categoryController.js'
import { schemaValidator } from '../middlewares/validations.js'
import { bodyCategorySchema, idCategorySchema } from '../schemas/categorySchema.js'
import { isAdmin } from '../middlewares/checkRole.js';

export const categoryRouter = () => {
    const categoryRouter = Router()
    const { getCategory, createCategory, updateCategory, deleteCategory, getCategoryById } = categoryController()

    categoryRouter.route('/category')
        .get(getCategory)
        .post(isAdmin, schemaValidator(bodyCategorySchema), createCategory)

    categoryRouter.route('/category/:id')
        .get(getCategoryById)
        .patch(isAdmin, schemaValidator(bodyCategorySchema), updateCategory)
        .delete(isAdmin, schemaValidator(idCategorySchema), deleteCategory)
    return categoryRouter
}
