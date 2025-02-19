import sequelize from "../config/db.js";
import User from "./User.js";
import Gallery from "./Gallery.js";
import Role from "./Role.js";
import Post from "./Post.js";
import Image from "./Image.js";
import './associations.js'
import { Sequelize } from "sequelize";



const models = {
  User: User(sequelize),
  Gallery: Gallery(sequelize),
  Role: Role(sequelize),
  Image: Image(sequelize),
  Post: Post(sequelize),
};

models.Role.hasMany(models.User, { foreignKey: "roleId", as: "Users" });
models.User.belongsTo(models.Role, { foreignKey: "roleId", as: "Roles" });

export {sequelize};

// const { User, Gallery, Role, Post, Image } = models;

export default models;
