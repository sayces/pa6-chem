/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
  // Добавление данных
  await queryInterface.bulkInsert('Users', [
    {
      username: 'arina',
      email: 'admin@example.com',
      password: '1111', // В реальном приложении используйте хэширование
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'sasha',
      email: 'user1@example.com',
      password: '2222',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
},

 down: async(queryInterface, Sequelize) => {
  // Удаление данных, если сид откатывается
  await queryInterface.bulkDelete('Users', { username: ['arina', 'sasha'] });
}
}