import sequelize from "../config/db.js";
import User from "./User.js";
import Gallery from "./Gallery.js";
import Role from "./Role.js";
import Post from "./Post.js";
import Image from "./Image.js";
import './associations.js'
import { Sequelize } from "sequelize";
import PostsImages from "./PostsImages.js";



const models = {
  // PostsImages: PostsImages(sequelize),
  User: User(sequelize),
  Gallery: Gallery(sequelize),
  Role: Role(sequelize),
  Image: Image(sequelize),
  Post: Post(sequelize),
};

models.Role.hasMany(models.User, { foreignKey: "roleId", as: "Users", onDelete: "CASCADE", onUpdate: "CASCADE" });
models.User.belongsTo(models.Role, { foreignKey: "id", as: "Roles" });

models.Image.belongsTo(models.Post, { foreignKey: "postId", as: "Posts", onDelete: "CASCADE", onUpdate: "CASCADE" });
models.Post.hasMany(models.Image, { foreignKey: "id", as: "Images" });

models.Gallery.hasMany(models.Post, { foreignKey: "collectionId", as: "Posts", onDelete: "CASCADE", onUpdate: "CASCADE" });
models.Post.belongsTo(models.Gallery, { foreignKey: "id", as: "Gallery" });

models.Gallery.belongsTo(models.User, { foreignKey: "id", as: "Users", onDelete: "CASCADE", onUpdate: "CASCADE" });
models.User.hasMany(models.Gallery, { foreignKey: "authorId", as: "Gallery" });

models.User.hasMany(models.Post, { foreignKey: "authorId", as: "Posts", onDelete: "CASCADE", onUpdate: "CASCADE" });
models.Post.belongsTo(models.User, { foreignKey: "id", as: "Users" });

export {sequelize};

export default models;
