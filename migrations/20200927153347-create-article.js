'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      prix_UHT: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      quantite: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: true,
        type: Sequelize.STRING
      },
      label: {
        allowNull: true,
        type: Sequelize.STRING
      },
      StartupId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'Startups',
          key : 'id'
        }
      },
    
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Articles');
  }
};