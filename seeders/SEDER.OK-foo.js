'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {  
    await queryInterface.bulkInsert('foos', [
      {
        nombre: 'John',
        apellido: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Maggie',
        apellido: 'Flushtenheimer',
        createdAt: new Date(),
        updatedAt: new Date()
      },      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('foos', null, {});
  }
};
