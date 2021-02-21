'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Startup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here


      models.Startup.hasMany(models.Horaire);

      models.Startup.hasMany(models.Tarif);
      
    }
  };
  Startup.init({
    nom: DataTypes.STRING,
    adresse: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Startup',
  });
  return Startup;
};