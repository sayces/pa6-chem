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
        // references: { model: "postsimages", key: "imageId" }, // Внешний ключ
        // onUpdate: "CASCADE",
        // onDelete: "CASCADE"
      },
      filename: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      postId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        // references: { model: "Posts", key: "id" }, // Внешний ключ
        // onUpdate: "CASCADE",
        // onDelete: "CASCADE"
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
