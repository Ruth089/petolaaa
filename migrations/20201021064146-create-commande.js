'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Commandes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      article: {
        type: Sequelize.STRING
      },
      quantite: {
        type: Sequelize.INTEGER
      },
      prix: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      ArticleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'Articles',
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
    await queryInterface.dropTable('Commandes');
  }
};