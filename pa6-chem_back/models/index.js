import { sequelize } from "../config/db.js";
import User from "./User.js";
import Gallery from "./Gallery.js";

const models = {
  User: User(sequelize),
  Gallery: Gallery(sequelize),
};

export { sequelize };
export default models;
