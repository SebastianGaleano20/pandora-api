import { Router } from 'express';
import { categoryController } from '../controllers/categoryController.js'
import { schemaCategoryValidator } from '../middlewares/validations.js'
import { bodyCategorySchema, idCategorySchema } from '../schemas/categorySchema.js'
import { isAdmin } from '../middlewares/checkRole.js';

export const categoryRouter = () => {
    const categoryRouter = Router()
    const { getCategory, createCategory, updateCategory, deleteCategory, getCategoryById } = categoryController()

    categoryRouter.route('/category')
        .get(getCategory)
        .post(isAdmin, schemaCategoryValidator(bodyCategorySchema), createCategory)

    categoryRouter.route('/category/:id')
        .get(schemaCategoryValidator(idCategorySchema), getCategoryById)
        .patch(isAdmin, schemaCategoryValidator(bodyCategorySchema), updateCategory)
        .delete(isAdmin, schemaCategoryValidator(idCategorySchema), deleteCategory)
    return categoryRouter
}