'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Abonnement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Abonnement.belongsTo(models.Tarif, {
        foreignKey : {
          allowNull: false
        }
      })
      models.Abonnement.belongsTo(models.Utilisateur, {
        foreignKey : {
          allowNull: false
        }
      })
    }
  };
  Abonnement.init({
    duree: DataTypes.STRING,
    adresse: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Abonnement',
  });
  return Abonnement;
};