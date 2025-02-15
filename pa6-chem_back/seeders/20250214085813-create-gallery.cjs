
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.bulkInsert('Gallery', [
    
      {
        id: 1,
        author: 1,
        filename: "test",
        url: "test",
        size: 0,
        likes: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Gallery");
  },
};
