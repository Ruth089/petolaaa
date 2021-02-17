'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CoordonneStartups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      num_tel: {
        type: Sequelize.STRING
      },
      ville: {
        type: Sequelize.STRING
      },
      commune: {
        type: Sequelize.STRING
      },
      rue_avenu: {
        type: Sequelize.STRING
      },
      numero: {
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
    await queryInterface.dropTable('CoordonneStartups');
  }
};