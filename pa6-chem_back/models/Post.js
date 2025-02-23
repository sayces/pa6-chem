import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";
  export default (sequelize, DataTypes) => {const Post = sequelize.define("Posts", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    authorId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      // references: { model: "User", as: "Users" },
      // onUpdate: "CASCADE",
      // onDelete: "CASCADE"
    },
    postName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    collectionId:   {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
      // references: { model: "Gallery" },
      // onUpdate: "CASCADE",
      // onDelete: "CASCADE"
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

  return Post
  ;}

