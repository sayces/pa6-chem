"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Images", [
      {
        filename: "test img",
        url: "test img url",
        size: 0,
        mimeType: "jpg",
        postId: 1,
        imageName: "test img name",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images");
  },
};
