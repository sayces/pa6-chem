"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Posts", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      postName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      authorId: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      collectionId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      // images: {
      //   type: Sequelize.DataTypes.STRING,
      //   allowNull: true,
      // },
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
    await queryInterface.dropTable("Posts");
  },
};
