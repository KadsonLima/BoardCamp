import joi from 'joi';


export const customerValidate = joi.object({
    name: joi.string().required(),

    phone: joi.string().required().min(11),

    cpf: joi.string().required().regex(/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/),

    birthday: joi.string().required().regex(/^\d{2}-\d{2}-\d{4}$/)

})