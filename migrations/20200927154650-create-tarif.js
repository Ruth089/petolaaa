'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tarifs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_de_collecte: {
       
        type: Sequelize.STRING
      },
      prix: {
        
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Tarifs');
  }
};