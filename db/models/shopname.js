'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShopName extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Shop}) {
      this.hasMany(Shop,{foreignKey:"name_id"})
    }
  };
  ShopName.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShopName',
  });
  return ShopName;
};
