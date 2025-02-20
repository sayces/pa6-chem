'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        // references: { model: "users", key: "roleId" }, // Внешний ключ
        // onUpdate: "CASCADE",
        // onDelete: "CASCADE"
      },
      roleName: {
        type: Sequelize.STRING,
        allowNull: false,

      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Roles");
  },
};
