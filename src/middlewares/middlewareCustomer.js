import Joi from "joi"
import { customerValidate } from "../schema/schemaCustomers.js"

export async function customerVerify(req, res, next){
    console.log("ASOUASODUASOD", req.body)

    try {
    
    const agora = await customerValidate.validateAsync(req.body)
    
    } catch (error) {
    console.log("ERRO", error)
        res.status(401).send(error.details);
        return;
    }
    next()

}