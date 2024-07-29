import { Router } from "express"
import { purchaseController } from "../controllers/purchaseController.js"
import { isAdmin } from "../middlewares/checkRole.js"

export const purchaseRouter = () => {
    const purchaseRouter = Router()

    const { createPurchase, getPurchasesUser } = purchaseController()

    purchaseRouter.route('/purchases')
        .post(createPurchase)

    purchaseRouter.route('/purchases/:id')
        .get(isAdmin ,getPurchasesUser)
        
    return purchaseRouter
}