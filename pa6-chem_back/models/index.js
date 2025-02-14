import { sequelize } from "../config/db.js";
import User from "./User.js";

const models = {
  User: User(sequelize),
};

export { sequelize };
export default models;
