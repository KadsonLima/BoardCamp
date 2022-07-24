import connection from "../bdStrategy/postGres.js";


export async function getGames(req, res){
    const {rows} = await connection.query('SELECT games.*, categories.name as "categoryName" FROM games JOIN categories ON "categoryId"=categories.id')
    res.status(200).send(rows)
}

export async function postGames(req, res){
    console.log("BODY", req.body);
    const {name, image, stockTotal, categoryId, pricePerDay} = req.body
    //$1,$2,$3,$4,$5
    try {
    await connection.query(`INSERT INTO games(name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1,$2,$3,$4,$5);`, [name, image, Number(stockTotal), Number(categoryId), Number(pricePerDay)*100])
        
    } catch (error) {
        console.log(error)
    }
    res.status(201)
}

