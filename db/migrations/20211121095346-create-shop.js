'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Shops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ShopNames",
          key: "id" 
         }
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ShopTypes",
          key: "id" 
         }
      },
      address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ShopAddresses",
          key: "id" 
         }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Shops');
  }
};
