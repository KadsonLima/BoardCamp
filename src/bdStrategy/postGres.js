import pg from 'pg';


const {Pool} = pg;

const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "32050832", // nao fica assim em um projeto de verdade
    database: "boardcamp"
  });


export default connection;