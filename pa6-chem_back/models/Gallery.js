import Sequelize from "sequelize";

export default (sequelize, DataTypes) => {
  const Gallery = sequelize.define(
    "Gallery",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      author: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      filename: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      url: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      mimeType: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      originalName: {
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
    },
    {
      freezeTableName: true,
      tableName: "Gallery",
    }
  );

  return Gallery;
};
