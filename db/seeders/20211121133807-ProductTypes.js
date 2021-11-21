'use strict';
const seed = require('../seed');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i = 0; i<seed.length;i++){
      if(seed[i][0] === "ProductTypes"){
        for(let j = 1; j<seed[i].length;j++){
          if(typeof seed[i][j] === "object"){
            await queryInterface.bulkInsert('ProductTypes', [{
              type: seed[i][j][0],
              productClass_id: +seed[i][j][1],
              createdAt: new Date(),
              updatedAt: new Date()
              
            }], {});
          }
          else {
            await queryInterface.bulkInsert('ProductTypes', [{
              type: seed[i][j],
              createdAt: new Date(),
              updatedAt: new Date()
            }], {});
          }
        }
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductTypes', null, {});
  }
};
