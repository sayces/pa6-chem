import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";
import Post from "./Post.js";
export default (sequelize, DataTypes) => {const Image = sequelize.define("Images", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    filename: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    postId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    mimeType: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    imageName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
  });
  return Image
  ;}

