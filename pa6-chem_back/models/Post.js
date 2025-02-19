import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";
  export default (sequelize, DataTypes) => {const Post = sequelize.define("Posts", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    author: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    
    images: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    postName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    },
    collection:   {
      type: Sequelize.DataTypes.INTEGER,
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

  return Post
  ;}

