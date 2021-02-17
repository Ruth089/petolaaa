'use strict';
const bcrypt = require("bcrypt");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Employe.belongsTo(models.Startup, {
        foreignKey : {
          allowNull: false
        }
      });     

    }
  };
  Employe.init({
    nom_employe: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    pwd: DataTypes.STRING,
    poste : DataTypes.STRING,
    photo : DataTypes.STRING
  },
  {
    hooks: {
      afterValidate: (Employe, options) => {
        Employe.pwd = bcrypt.hashSync(Employe.pwd, 8);
      }
    },
    sequelize
  }
  ,
   {
    sequelize,
    modelName: 'Employe',
  });
  return Employe;
};