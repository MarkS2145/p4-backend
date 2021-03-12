'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Locations",
      [
        {
          lat: "34.11111",
          lon: "-118.11111",
          vehicle_fk: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lat: "34.22222",
          lon: "-118.22222",
          vehicle_fk: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lat: "34.33333",
          lon: "-118.33333",
          vehicle_fk: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
