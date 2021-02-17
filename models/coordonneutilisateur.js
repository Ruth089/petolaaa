'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoordonneUtilisateur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.CoordonneUtilisateur.belongsTo(models.Utilisateur, {
        foreignKey : {
          allowNull: false
        }
      });;
    }
  };
  CoordonneUtilisateur.init({
    num_tel: DataTypes.STRING,
    ville: DataTypes.STRING,
    commune: DataTypes.STRING,
    rue_avenu: DataTypes.STRING,
    numero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CoordonneUtilisateur',
  });
  return CoordonneUtilisateur;
};