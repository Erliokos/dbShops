'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ProductClass,ProductList}) {
      this.hasMany(ProductList,{foreignKey:"productType_id"})
      this.belongsTo(ProductClass,{foreignKey:"productClass_id"})
    }
  };
  ProductType.init({
    type: DataTypes.STRING,
    productClass_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductType',
  });
  return ProductType;
};
