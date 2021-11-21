'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShopType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Shop}) {
      this.hasMany(Shop,{foreignKey:"type_id"})
    }
  };
  ShopType.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShopType',
  });
  return ShopType;
};
