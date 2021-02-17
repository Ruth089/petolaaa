'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Abonnements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      duree: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      TarifId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'Tarifs',
          key : 'id'
        }
      },
      UtilisateurId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'Utilisateurs',
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
    await queryInterface.dropTable('Abonnements');
  }
};