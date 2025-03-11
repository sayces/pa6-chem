'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments', [{

      id: 1,
      clientId: 1,
      masterId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      appointmentDate: "2025-03-03",
      addition: "test addition",
     },{
      id: 2,
      clientId: 1,
      masterId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      appointmentDate: "2025-03-19",
      addition: "test addition 2",
     },
     
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Appointments', null, {});
     
  }
};
