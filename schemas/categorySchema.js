import Joi from 'joi'

export const bodyCategorySchema = Joi.object({
        name: Joi.string().required().messages({
        'string.base': 'Name must be a string',
        'string.empty': 'Name cannot be empty',
        'any.required': 'Name is required'
    })
})
export const idCategorySchema = Joi.object({
    id: Joi.string().pattern(/^[0-9]+$/).required().messages({
        'string.pattern.base': 'ID must be a number',
        'string.empty': 'ID cannot be empty',
        'any.required': 'ID is required'
    })
});

export const updateCategorySchema = Joi.object({
    body: bodyCategorySchema,
    params: idCategorySchema
});
