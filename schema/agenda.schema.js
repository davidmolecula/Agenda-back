import Joi from 'joi'

export const createAgendaSchema=Joi.object({
    name:Joi.string()
    .required()
    .min(2)
    .max(50),
    description:Joi.string()
    .required()
    .min(2)
    .max(50),
    importance:Joi.string()
    .required()
    .min(2)
    .max(50),   
    date:Joi.date()
    .required(),
    color:Joi.string()
    .required()
})