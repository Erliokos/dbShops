'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ShopName,ShopType,ShopAddress,Product}) {
      this.belongsTo(ShopName,{foreignKey:"name_id"})
      this.belongsTo(ShopType,{foreignKey:"type_id"})
      this.belongsTo(ShopAddress,{foreignKey:"address_id"})
      this.belongsToMany(Product,{through:"Shop_Product",foreignKey:"shop_id"})
    }
  };
  Shop.init({
    name_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    address_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};
