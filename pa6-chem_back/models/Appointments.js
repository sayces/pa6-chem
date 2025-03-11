import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";

export default (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    "Appointments",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      appointmentDate: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      clientId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      masterId: {
        type: Sequelize.DataTypes.INTEGER,
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
      addition: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      tableName: "Appointments",
    }
  );
  return Appointment;
};
