'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PostImages", {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Posts", // Имя таблицы в БД
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      imageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Images", // Имя таблицы в БД
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    },
    {
      timestamps: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PostImages");
  },
};
