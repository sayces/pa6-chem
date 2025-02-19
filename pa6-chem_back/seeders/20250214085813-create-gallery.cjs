
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.bulkInsert('Gallery', [
    
      {
        id: 1,
        author: 1,
        collectionName: "test collection",
        posts: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Gallery");
  },
};
