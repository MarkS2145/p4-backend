'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Vehicles",
      [
        {
          vehicle_name: "Deere Loader",
          img_url: "https://www.deere.com/assets/images/common/our-company/news/JD-444L-Large.jpg",
          driver_name: "Bob E",
          phone_number: "555-999-1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vehicle_name: "Deere Tractor",
          img_url: "https://www.deere.com/assets/images/region-4/products/tractors/tractor-group/row-crop-tractor-group-r4b009242-1366.jpg",
          driver_name: "Manny Driver",
          phone_number: "555-0123-1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vehicle_name: "Deere Sprayer",
          img_url: "https://www.deere.com/assets/images/region-4/products/application-equipment/r4044-sprayer/r4044_sprayer_r4g049045_rrd_large_94800571cd6da7ec8c8877c55822b344813c26fc.jpg",
          driver_name: "Spiffy D",
          phone_number: "555-222-8888",
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
