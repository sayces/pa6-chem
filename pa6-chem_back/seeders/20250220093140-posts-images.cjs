"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   "PostsImages",
    //   [
    //     {
    //       postId: 1,
    //       imageId: 1,
    //     },
    //   ],
    //   {}
    // );
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete("PostsImages", null, {});
  },
};
