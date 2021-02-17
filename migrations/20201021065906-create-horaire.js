'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Horaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jour: {
        type: Sequelize.STRING
      },
      heure_debut: {
        type: Sequelize.STRING
      },
      heure_fin: {
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
    await queryInterface.dropTable('Horaires');
  }
};