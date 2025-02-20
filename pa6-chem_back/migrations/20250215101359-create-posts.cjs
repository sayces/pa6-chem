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
      author: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },

      // images: {
      //   type: Sequelize.DataTypes.STRING,
      //   allowNull: true,
      //   references: { model: "postsimages", key: "imageId" }, // Внешний ключ
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE"
      // },
      collection: {
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
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  },
};
