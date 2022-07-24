import connection from "../bdStrategy/postGres.js";
import dayjs from 'dayjs';

export async function getRental(req, res){
    const {rows} = await connection.query(`
    SELECT rentals.*, customers.name as "nameCustomer", games.*, categories.name as categoryName
    FROM customers 
    JOIN rentals ON rentals."customerId"=customers.id
    JOIN games ON rentals."gameId"=games.id
    JOIN categories ON categories.id=games."categoryId"
    `)
    let array = rows.map(row =>{
        return formatObject(row)
    })

    res.status(201).send(array)
}

export async function postRental(req, res){
    const {customerId, gameId, daysRented} = req.body;

    const dataAlugado = dayjs().format('YYYY-MM-DD');

    const {rows} = await connection.query(`SELECT games."pricePerDay" FROM games WHERE games.id=${gameId}`)
    
    const priceRental = rows[0].pricePerDay*daysRented;

    try {
        await connection.query('INSERT INTO rentals("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") VALUES ($1,$2,$3,$4,$5,$6,$7)', [customerId, gameId, dataAlugado, daysRented, null, priceRental, null])
        res.sendStatus(201);
    } catch (error) {
        console.log(error)
        res.sendStatus(401);
    }
}


function formatObject(row) {
    const {
      id, customerId, gameId,
      rentDate, daysRented, returnDate,
      originalPrice, delayFee, nameCustomer,
      name, categoryId, categoryname
     } = row;
     
    return {
      id,
      customerId,
      gameId,
      rentDate,
      daysRented,
      returnDate,
      originalPrice,
      delayFee,
      customer: {
        id: customerId,
        name: nameCustomer
      },
      game: {
        id: gameId,
        name: name,
        categoryId,
        categoryName:categoryname
      }
    }
  }
