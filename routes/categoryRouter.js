import { Router } from 'express';
import { categoryController } from '../controllers/categoryController.js';
import { schemaCategoryValidator } from '../middlewares/validations.js';
import { bodyCategorySchema, idCategorySchema } from '../schemas/categorySchema.js';

export const categoriesRouter = () => {
    const categoryRouter = Router();
    const { getCategories, createCategory, updateCategory, deleteCategory, getCategoryById } = categoryController();

    categoryRouter.route('/categories')
        .get(getCategories)
        .post(schemaCategoryValidator(bodyCategorySchema), createCategory)

    categoryRouter.route('/categories/:id')
        .get(schemaCategoryValidator(idCategorySchema), getCategoryById)
        .patch(schemaCategoryValidator(bodyCategorySchema), updateCategory)
        .delete(schemaCategoryValidator(idCategorySchema), deleteCategory)
    return categoryRouter
}