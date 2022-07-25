import connection from "../bdStrategy/postGres.js";


export async function rentalsVerify(req, res, next){

    const {customerId, gameId, daysRented} = req.body;
    if(daysRented <= 0){
        return res.sendStatus(400);
        
    }
    const {rows} = await connection.query(`
    SELECT * FROM categories
    CROSS JOIN customers
    `)

    console.log("RESULTADO", rows)
   
    next()

}