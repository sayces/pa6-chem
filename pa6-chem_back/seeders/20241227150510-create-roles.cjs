/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Добавление данных
    await queryInterface.bulkInsert("Roles", [
      {
        id: 0,
        roleName: "admin",
      },
      {
        id: 1,
        roleName: "master",
      },
      {
        id: 2,
        roleName: "user",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Удаление данных, если сид откатывается
    await queryInterface.bulkDelete("Roles");
  },
};
