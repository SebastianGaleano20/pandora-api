import { Router } from "express"
import { userController } from "../controllers/userController.js"
import { schemaUserValidator } from "../middlewares/validations.js"
import { userSchema } from "../schemas/userSchema.js"

export const userRouter = () => {
    const userRouter = Router();
    const { register, login, profile } = userController()

    userRouter.route('/register')
        .post(schemaUserValidator(userSchema), register)
    userRouter.route('/login')
        .post(login)
    userRouter.route('/profile/:id')
        .get(profile)
    
    return userRouter
}