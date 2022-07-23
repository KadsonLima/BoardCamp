import connection from "../bdStrategy/postGres.js";


export async function getCategory(req, res){
    const alou = await connection.query('SELECT * FROM categories;')
    res.status(201).send(alou.rows)
}

export async function postCategory(req, res){
    console.log("BODY", req.body);
    
    try {
        await connection.query("INSERT INTO categories(name) VALUES ($1)", [req.body.name]);
        res.sendStatus(201)
    } catch (error) {
        
    }
    
}
