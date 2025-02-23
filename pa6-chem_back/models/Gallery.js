import {DataTypes, Sequelize} from "sequelize";
import sequelize from "../config/db.js";

export default (sequelize, DataTypes) => { const Gallery = sequelize.define(
    "Gallery",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      collectionName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      authorId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        // references: { model: "Users", key: "authorId" }, // Внешний ключ
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
    },
    {
      freezeTableName: true,
      tableName: "Gallery",
    }
  );
  return Gallery
  ;}

