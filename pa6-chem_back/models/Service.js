import sequelize from "../config/db.js";
import { DataTypes, Sequelize } from "sequelize";


export default (sequelize, DataTypes) => {
  const Service = sequelize.define(
    "Services",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      serviceName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
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
    { tableName: "Services", sequelize }
  );

  return Service;
};
