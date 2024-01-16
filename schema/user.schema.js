import Joi from 'joi'

export const createUserSchema=Joi.object({
    name:Joi.string()
    .required()
    .min(2)
    .max(50),
    surname:Joi.string()
    .required()
    .min(2)
    .max(50),
    email: Joi.string()
    .required()
    .email(
        {
            minDomainSegments:2 
        }),
    password:Joi.string()
    .required()
    .min(8)
    .max(35)
    .alphanum(),
    photo:Joi.string()
})