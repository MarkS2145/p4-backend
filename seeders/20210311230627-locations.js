'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Locations",
      [
        {
          lat: "33.8000",
          lon: "-118.3000",
          vehicle_fk: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lat: "33.8358",
          lon: "-118.3406",
          vehicle_fk: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lat: "33.9000",
          lon: "-118.1500",
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
