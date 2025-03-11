'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('Services', [{
      serviceName: "маникюр",
      description: "Услуга маникюра выполняется по-умолчанию и включает в себя: \nаппаратную обработку и удаление кутикулы;\nподготовка ногтевой пластины перед покрытием",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      serviceName: "снятие ногтей",
      description: "Услуга снятия ногтей выполняется по-умолчанию и подразумевает удаление слоя лака предыдущей работы нашего мастера на бесплатной основе. \nЕсли старый слой лака был нанесен мастером другого салона, тогда данная услуга будет оплачиваться клиентом по текущей цене услуги. \nЕсли слой лака на ногтевых пластинах отсутствует, то услуга не будет проведена",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      serviceName: "дизайн",
      description: "Услуга дизайна выполняется по требованию клиента и включает в себя нанесение дополнительного...",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
     
  }
};
