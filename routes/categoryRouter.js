import { Router } from 'express';
import { categoryController } from '../controllers/categoryController.js'
import { schemaCategoryValidator } from '../middlewares/validations.js'
import { bodyCategorySchema, idCategorySchema } from '../schemas/categorySchema.js'

export const categoryRouter = () => {
    const categoryRouter = Router()
    const { getCategory, createCategory, updateCategory, deleteCategory, getCategoryById } = categoryController()

    categoryRouter.route('/category')
        .get(getCategory)
        .post(schemaCategoryValidator(bodyCategorySchema), createCategory)

    categoryRouter.route('/category/:id')
        .get(schemaCategoryValidator(idCategorySchema), getCategoryById)
        .patch(schemaCategoryValidator(bodyCategorySchema), updateCategory)
        .delete(schemaCategoryValidator(idCategorySchema), deleteCategory)
    return categoryRouter
}