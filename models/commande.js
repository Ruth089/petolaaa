'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Commande.belongsTo(models.Utilisateur, {
        foreignKey : {
          allowNull: false
        }
      });

      models.Commande.belongsTo(models.Article, {
        foreignKey : {
          allowNull: false
        }
      });

    }
  };
  Commande.init({
    article: DataTypes.STRING,
    quantite: DataTypes.INTEGER,
    prix: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Commande',
  });
  return Commande;
};