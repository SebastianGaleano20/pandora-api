import { Router } from 'express';
import { categoryController } from '../controllers/categoryController.js';

export const categoriesRouter = () => {
    const categoryRouter = Router();
    const { getCategories } = categoryController();

    categoryRouter.route('/categories').get(getCategories)
    
    return categoryRouter
}