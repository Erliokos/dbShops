'use strict';
const seed = require('../seed');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i = 0; i<seed.length;i++){
      if(seed[i][0] === "Products"){
        for(let j = 1; j<seed[i].length;j++){
          if(typeof seed[i][j] === "object"){
            await queryInterface.bulkInsert('Products', [{
              name: seed[i][j][0],
              productList_id: +seed[i][j][1],
              description_id: +seed[i][j][2],
              createdAt: new Date(),
              updatedAt: new Date()
              
            }], {});
          }
          else {
            await queryInterface.bulkInsert('Products', [{
              name: seed[i][j],
              createdAt: new Date(),
              updatedAt: new Date()
            }], {});
          }
        }
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
