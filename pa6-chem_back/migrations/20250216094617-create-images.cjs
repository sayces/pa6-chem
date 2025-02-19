"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Images", {
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
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Images");
  },
};
