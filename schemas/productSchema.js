import Joi from 'joi'

export const bodyProductSchema = Joi.object({
    body: Joi.object({
        productName: Joi.string().max(80).required(),
        price: Joi.number().required(),
        isVegan: Joi.boolean().required(),
        image: Joi.string().uri().required(),
        stock: Joi.boolean().required(),
        description: Joi.string().required(),
        categoryId: Joi.number().required()
    })
})

export const idProductSchema = Joi.object({
    params: Joi.object({
        id: Joi.string().required()
    })
})

export const updateProductSchema = Joi.object({
    body: bodyProductSchema.extract('body'),
    params: idProductSchema.extract('params')
})


