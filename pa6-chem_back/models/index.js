import sequelize from "../config/db.js";
import User from "./User.js";
import Gallery from "./Gallery.js";
import Role from "./Role.js";
import Post from "./Post.js";
import Image from "./Image.js";
import './associations.js'
import { Sequelize } from "sequelize";
import PostImages from "./PostImages.js";
import Service from "./Service.js";



const models = {
  PostImages: PostImages(sequelize),
  User: User(sequelize),
  Gallery: Gallery(sequelize),
  Role: Role(sequelize),
  Image: Image(sequelize),
  Post: Post(sequelize),
  Service: Service(sequelize)
};

models.Role.hasMany(models.User, { foreignKey: "roleId", as: "Users", onDelete: "CASCADE", onUpdate: "CASCADE"});
models.User.belongsTo(models.Role, { foreignKey: "roleId", as: "Role", onDelete: "CASCADE", onUpdate: "CASCADE"  });

models.Gallery.hasMany(models.Post, { foreignKey: "collectionId", as: "Posts", onDelete: "CASCADE", onUpdate: "CASCADE" });
models.Post.belongsTo(models.Gallery, { foreignKey: "collectionId", as: "Gallery", onDelete: "CASCADE", onUpdate: "CASCADE" });

models.User.hasMany(models.Gallery, { foreignKey: "authorId", as: "Gallery", onDelete: "CASCADE", onUpdate: "CASCADE" });
models.Gallery.belongsTo(models.User, { foreignKey: "authorId", as: "User", onDelete: "CASCADE", onUpdate: "CASCADE" });

models.User.hasMany(models.Post, { foreignKey: "authorId", as: "posts" , onDelete: "CASCADE", onUpdate: "CASCADE" });
models.Post.belongsTo(models.User, { foreignKey: "authorId", as: "author", onDelete: "CASCADE", onUpdate: "CASCADE" });

models.Post.belongsToMany(models.Image, { through: models.PostImages, foreignKey: "postId", as: "images", onDelete: "CASCADE", onUpdate: "CASCADE" });
models.Image.belongsToMany(models.Post, { through: models.PostImages, foreignKey: "imageId", as: "posts", onDelete: "CASCADE", onUpdate: "CASCADE" });



export {sequelize};

export default models;
