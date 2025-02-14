import "dotenv/config";

export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "9410",
    database: "chemistry",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "9410",
    database: "chemistry",
    host: "localhost",
    dialect: "mysql",
  },
};
