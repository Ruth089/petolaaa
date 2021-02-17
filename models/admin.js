'use strict';
const bcrypt = require("bcrypt");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Admin.init({
    nom: DataTypes.STRING,
    pwd: DataTypes.STRING,
    role: DataTypes.STRING
  }, 
  {
    hooks: {
      afterValidate: (Admin, options) => {
        Admin.pwd = bcrypt.hashSync(Admin.pwd, 8);
      }
    },
    sequelize
  }
  ,
  {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
}