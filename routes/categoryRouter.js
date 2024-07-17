import { Router } from 'express';
import { categoryController } from '../controllers/categoryController.js';
import { validateCategory } from '../middlewares/validations.js';

export const categoriesRouter = () => {
    const categoryRouter = Router();
    const { getCategories, createCategory, updateCategory, deleteCategory, getCategoryById } = categoryController();

    categoryRouter.route('/categories')
        .get(getCategories)
        .post(validateCategory, createCategory)

    categoryRouter.route('/categories/:id')
        .get(getCategoryById)
        .patch(validateCategory, updateCategory)
        .delete(deleteCategory)
    return categoryRouter
}