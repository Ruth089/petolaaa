'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom_employe: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      prenom: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      pwd: {
        // allowNull: false,
        type: Sequelize.STRING
      }, 
      poste: {
        // allowNull: false,
        type: Sequelize.STRING
      }, 
      photo: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        // allowNull: false,
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
    await queryInterface.dropTable('Employes');
  }
};