'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ('Funkos', [
      {
        name: "Bulbasur",
        price: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Charmander",
        price: 130,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Raichu",
        price: 56,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Eve",
        price: 88,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Venassaur",
        price: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
