'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Article.hasMany(models.Commande);

      models.Article.belongsTo(models.Startup, {
        foreignKey : {
          allowNull: false
        }
      });

    }
  };
  Article.init({
    nom: DataTypes.STRING,
    image: DataTypes.STRING,
    prix_UHT: DataTypes.INTEGER,
    quantite: DataTypes.INTEGER,
    type: DataTypes.STRING,
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};