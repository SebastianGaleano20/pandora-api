import Joi from 'joi'

export const bodyCategorySchema = Joi.object({
    body: Joi.string({
        name: Joi.string().required(),
        id: Joi.string().pattern(/^[0-9]+$/, 'id must be a number').required()
    })
})
export const idCategorySchema = Joi.object({
    params: ({
        id: Joi.string().pattern(/^[0-9]+$/, 'id must be a number').required()
    })
})

export const updateCategorySchema = Joi.object({
    body: bodyCategorySchema.extract('body'),
    params: idCategorySchema.extract('params')
})