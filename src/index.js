import Express  from "express";
import cors from 'cors';
import connection from "./bdStrategy/postGres.js";


const App = Express();
App.use(cors(), Express.json());

//await connection.query('INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1,$2,$3,$4)', ['Kadson Lima', '996443438', '11030480400', '1997-09-06'])
//console.log("COLADO", alou.rows)
              


App.get('/customers', async (req, res)=>{
    const alou = await connection.query('SELECT * FROM customers')
    res.status(201).send(alou.rows)
})

App.get('/games', async (req, res)=>{
    const alou = await connection.query('SELECT * FROM customers')
    res.status(201).send(alou.rows)
})

App.get('/rentals', async (req, res)=>{
    const alou = await connection.query('SELECT * FROM customers')
    res.status(201).send(alou.rows)
})

App.get('/categories', async (req, res)=>{
    const alou = await connection.query('SELECT * FROM customers')
    res.status(201).send(alou.rows)
})



            
App.listen("4000", ()=> {
    console.log(`server running at 5000`); 
})
