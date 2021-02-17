'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Horaire.belongsTo(models.Startup, {
        foreignKey : {
          allowNull: false
        }
      });    
    }
  };
  Horaire.init({
    jour: DataTypes.STRING,
    heure_debut: DataTypes.STRING,
    heure_fin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Horaire',
  });
  return Horaire;
};