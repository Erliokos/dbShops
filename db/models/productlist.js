'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ProductType,Product}) {
      this.hasMany(Product,{foreignKey:"productList_id"})
      this.belongsTo(ProductType,{foreignKey:"productType_id"})
    }
  };
  ProductList.init({
    name: DataTypes.STRING,
    productType_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductList',
  });
  return ProductList;
};
