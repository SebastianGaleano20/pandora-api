import { Router } from 'express';
import { categoryController } from '../controllers/categoryController.js';

export const categoriesRouter = () => {
    const categoryRouter = Router();
    const { getCategories, createCategory } = categoryController();

    categoryRouter.route('/categories')
        .get(getCategories)
        .post(createCategory)

    return categoryRouter
}