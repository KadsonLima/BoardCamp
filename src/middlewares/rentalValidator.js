import connection from "../bdStrategy/postGres.js";
import rentalsSchema from "../schemas/rentalSchema.js";

export async function validateRental(req, res, next) {
  const {customerId, gameId, daysRented} = req.body;

  const validation = rentalsSchema.validate(req.body);

  const user = await connection.query(`SELECT * FROM customers WHERE customers.id=$1`, [customerId]);
  const game = await connection.query(`SELECT * FROM games WHERE games.id=$1`, [customerId]);

  if(user.rowCount === 0 || game.rowCount === 0 || daysRented === 0) return res.sendStatus(400)
  console.log("user", user)
  

  if (validation.error) {
    return res.sendStatus(400); // bad request
  }
 
  next();
}

export async function validateDeleteRental(req, res, next) {
  const {id} = req.params;
  console.log("ID", id, req.query, req.body)

  const result = await connection.query(`SELECT * FROM rentals WHERE id=$1`, [id]);
    console.log(result.rows)
  if(result.rowCount === 0) {
    return res.sendStatus(404); 
  } 
  const aluguel = result.rows[0];

  if(!aluguel.returnDate){
    return res.sendStatus(400);
  }


  next();
}