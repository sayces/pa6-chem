"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Posts", [{
      postName: "test post",
      collection: 1,
      author: 1,
      images: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Posts");
  },
};
