const dotenv = require('dotenv');
const mysql2 = require('mysql2');
dotenv.config();

const conn = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT
});

conn.connect((err) => {
  if (err) {
    console.log(err.message);
  }
  console.log(conn.state);
})