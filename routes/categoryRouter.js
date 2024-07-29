import { Router } from 'express';
import { categoryController } from '../controllers/categoryController.js'
import { isAdmin } from '../middlewares/checkRole.js';

export const categoryRouter = () => {
    const categoryRouter = Router()
    const { getCategory, createCategory, updateCategory, deleteCategory, getCategoryById } = categoryController()

    categoryRouter.route('/category')
        .get(getCategory)
        .post(isAdmin, createCategory)

    categoryRouter.route('/category/:id')
        .get(getCategoryById)
        .patch(isAdmin, updateCategory)
        .delete(isAdmin, deleteCategory)
    return categoryRouter
}
