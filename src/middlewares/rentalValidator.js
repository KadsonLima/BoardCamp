import connection from "../bdStrategy/postGres.js";
import rentalsSchema from "../schemas/rentalSchema.js";

export function validateRental(req, res, next) {
  const rental = req.body;
  const validation = rentalsSchema.validate(rental);
  if (validation.error) {
    return res.sendStatus(400); // bad request
  }

  next();
}

export async function validateDeleteRental(req, res, next) {
  const {id} = req.params;

  const result = await connection.query(`SELECT * FROM rentals WHERE id = $1`, [id]);
    
  if(result.rowCount === 0) {
    return res.sendStatus(404); // not found
  } if(!(result.rows[0].returnDate)){
    console.log(result.rows[0])
    return res.sendStatus(400);
  }


  next();
}