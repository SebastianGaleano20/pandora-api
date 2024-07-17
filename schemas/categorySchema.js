import Joi from 'joi'

export const categorySchema = Joi.object({
    name: Joi.string().required(),
    id: Joi.string().pattern(/^[0-9]+$/, 'id must be a number').required()
})
export const idCategorySchema = Joi.object({
    id: Joi.string().pattern(/^[0-9]+$/, 'id must be a number').required()
})
