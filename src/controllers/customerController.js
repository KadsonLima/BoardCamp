import connection from "../bdStrategy/postGres.js";



export async function getCustomers(req, res){
    const alou = await connection.query('SELECT * FROM customers')
    res.status(200).send(alou.rows)
}

export async function postCustomers(req, res){
    const {name, phone, cpf, birthday} = req.body;

    await connection.query('INSERT INTO customers(name, phone, cpf, birthday) VALUES ($1,$2,$3,$4)', [name, phone, cpf, birthday])
    res.sendStatus(201);
}