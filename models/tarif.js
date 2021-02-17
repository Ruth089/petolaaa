'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarif extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Tarif.belongsTo(models.Startup, {
        foreignKey : {
          allowNull: false
        }
      });

      models.Tarif.hasMany(models.Abonnement);
    }
  };
  Tarif.init({
   
    type_de_collecte: DataTypes.STRING,
    prix: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tarif',
  });
  return Tarif;
};