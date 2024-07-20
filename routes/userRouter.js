import { Router } from "express";
import { userController } from "../controllers/userController.js";

export const userRouter = () => {
    const userRouter = Router();
    const { register, login, profile } = userController()

    userRouter.route('/register')
        .post(register)
    userRouter.route('/login')
        .post(login)
    userRouter.route('/profile/:id')
        .get(profile)
    
    return userRouter
}