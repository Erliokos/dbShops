'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Description,ProductList,Shop}) {
      this.belongsTo(Description,{foreignKey:"description_id"})
      this.belongsTo(ProductList,{foreignKey:"productList_id"})
      this.belongsToMany(Shop,{through:"Shop_Product",foreignKey:"product_id"})
    }
  };
  Product.init({
    name: DataTypes.STRING,
    productList_id: DataTypes.INTEGER,
    description_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
