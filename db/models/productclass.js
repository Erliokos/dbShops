"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ProductType }) {
      this.hasMany(ProductType, { foreignKey: "productClass_id" });
    }
  }
  ProductClass.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductClass",
    }
  );
  return ProductClass;
};
