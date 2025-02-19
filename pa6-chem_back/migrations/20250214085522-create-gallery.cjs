"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
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
        author: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
        },
        posts: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
          unique: false,
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Gallery");
  },
};
