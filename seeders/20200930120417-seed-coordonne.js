'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     //Add seed commands here.
     
      await queryInterface.bulkInsert('Coordonnes', [
        {
        num_telephone: "56784345",
        ville: "kinshasa",
        commune: "limete",
        quartier: "salongo",
        avenu: "corniche",
        numero: "45 bis",
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        num_telephone: "84345",
        ville: "kintambo",
        commune: "gombe",
        quartier: "ubangi",
        avenu: "corniche",
        numero: "46 bis",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
   
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
