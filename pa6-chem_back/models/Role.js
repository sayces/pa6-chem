import sequelize from "../config/db.js";
import { DataTypes, Sequelize } from "sequelize";

export default (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Roles",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      roleName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
    }
  );

  return Role;
};
