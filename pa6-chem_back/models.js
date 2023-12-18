import Sequelize from "sequelize";
import mysql from 'mysql2'

let conn;

(async function() {
  if (!conn) {
    try {
      conn = new Sequelize('pa6-chem_db', 'root', 'fifteen49', {
        dialect: 'mysql',
        storage: './db.mysql',
      })
      console.log('connected to the database!');

      try {
        await conn.sync({force: true});
        console.log('created tables')
      } catch (err) {
        console.log(err + " -- err 2");
      }
    } catch (err) {
      console.log(err + ' -- err 1');
    }
  }
})();

export const Users = conn.define('users', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING,
})