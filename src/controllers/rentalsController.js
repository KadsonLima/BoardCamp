import connection from "../bdStrategy/postGres.js";


export async function getRental(req, res){
    const alou = await connection.query('SELECT * FROM rentals')
    res.status(201).send(alou.rows)
}

export async function postRental(req, res){
    console.log("BODY", req.body);
    const {name, image, stockTotal, categoryId, pricePerDay} = req.body
    //$1,$2,$3,$4,$5
    try {
    await connection.query(`INSERT INTO games(name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1,$2,$3,$4,$5);`, [name, image, Number(stockTotal), Number(categoryId), Number(pricePerDay)])
        
    } catch (error) {
        console.log(error)
    }
    res.status(201)
}

