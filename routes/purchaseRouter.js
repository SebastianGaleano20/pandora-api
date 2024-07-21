import { Router } from "express"
import { purchaseController } from "../controllers/purchaseController.js"

export const purchaseRouter = () => {
    const purchaseRouter = Router()

    const {productBuyByUser, getPurchasesUser} = purchaseController()

    purchaseRouter.route('/purchases')
        .post(productBuyByUser)
        .get(getPurchasesUser)
    return purchaseRouter
}