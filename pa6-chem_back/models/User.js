import sequelize from "../config/db.js";
import { DataTypes, Sequelize } from "sequelize";


export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      roleId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        // references: { model: "Roles", key: "id" }, // Внешний ключ
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
    { tableName: "Users", sequelize }
  );

  return User;
};
