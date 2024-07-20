import { Router } from "express";

export const purchaseRouter = () =>{
    const purchaseRouter = Router()

    purchaseRouter.route('/purchases')
        .get()
        .post()
        .delete()
        .patch()
    purchaseRouter.route('/purchases/:id')
        .get()

}