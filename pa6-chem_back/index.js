import mysql from "mysql2";
import 'dotenv/config'
  
const pool = mysql.createPool({
  host    : process.env.HOST,
  user    : process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
}).promise();

const [result] = await pool.query("SELECT * FROM users")

console.log([result]);


// connection.connect(function(err){
//     if (err) {
//       return console.error("Ошибка: " + err.message);
//     }
//     else{
//       console.log("Подключение к серверу MySQL успешно установлено");
//     }
//  });