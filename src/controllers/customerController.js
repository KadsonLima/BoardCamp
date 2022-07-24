import connection from "../bdStrategy/postGres.js";

export async function getCustomers(req, res) {
  const alou = await connection.query("SELECT * FROM customers");
  res.status(200).send(alou.rows);
}

export async function getCustomer(req, res) {

  const { rows: dateCustomer } = await connection.query(
    `SELECT customers.* FROM customers WHERE id=$1`,
    [Number(req.params.id)]
  );

  if (dateCustomer.length == 0) {
    res.sendStatus(404);
    return;
  }

  res.status(200).send(dateCustomer[0]);
}

export async function postCustomers(req, res) {
  const { name, phone, cpf, birthday } = req.body;

  await connection.query(
    "INSERT INTO customers(name, phone, cpf, birthday) VALUES ($1,$2,$3,$4)",
    [name, phone, cpf, birthday]
  );
  res.sendStatus(201);
}

export async function updateCustomer(req, res) {
    const {name, phone, cpf, birthday} = req.body;
    const {id} = req.params;

    //console.log(typeof(new Date(birthday)))

    try {
        await connection.query(`
        UPDATE customers SET name='${name}',phone=${phone}, cpf=${cpf}, birthday='${birthday}' WHERE id=${id}
        `)
        res.sendStatus(202)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
    
  }