import connection from "../bdStrategy/postGres.js";
import dayjs from 'dayjs';

export async function getRental(req, res){
    const alou = await connection.query('SELECT * FROM rentals')
    res.status(201).send(alou.rows)
}

export async function postRental(req, res){
    const {customerId, gameId, daysRented} = req.body;
    console.log(dayjs().format('YYYY-MM-DD'))

    const dataAlugado = dayjs().format('YYYY-MM-DD');

    const {rows} = await connection.query(`SELECT games."pricePerDay" FROM games WHERE games.id=${gameId}`)
    
    const priceRental = rows[0].pricePerDay*daysRented;
    console.log("DIAS ALUGADO", priceRental);

    try {
        await connection.query('INSERT INTO rentals("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") VALUES ($1,$2,$3,$4,$5,$6,$7)', [customerId, gameId, dataAlugado, daysRented, null, priceRental, null])
        res.sendStatus(201);
    } catch (error) {
        console.log(error)
        res.sendStatus(401);
    }
}

