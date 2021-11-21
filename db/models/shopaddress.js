'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShopAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Shop}) {
      this.hasMany(Shop,{foreignKey:"address_id"})
    }
  };
  ShopAddress.init({
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShopAddress',
  });
  return ShopAddress;
};
