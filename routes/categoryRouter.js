import { Router } from 'express';
import { categoryController } from '../controllers/categoryController.js';

export const categoriesRouter = () => {
    const categoryRouter = Router();
    const { getCategories, createCategory, updateCategory, deleteCategory, getCategoryById } = categoryController();

    categoryRouter.route('/categories')
        .get(getCategories)
        .post(createCategory)
    
    categoryRouter.route('/categories/:id')
        .get(getCategoryById)
        .patch(updateCategory)
        .delete(deleteCategory)
    return categoryRouter
}