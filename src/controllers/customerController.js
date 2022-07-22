import connection from "../bdStrategy/postGres.js";



export async function getCustomers(req, res){
    const alou = await connection.query('SELECT * FROM customers')
    res.status(201).send(alou.rows)
}

export async function postCustomers(req, res){
    console.log(req.body)
}