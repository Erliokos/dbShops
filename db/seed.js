const path = require('path')
const fs = require('fs');

const seed = fs.readFileSync(path.join(__dirname, 'seed.txt'),"utf8").trim().split("\n").map(el=>el.split(",").map(el=>{
  if(el.split("|").length>1){
    return el.split("|")
  }
  else return el
}))

console.log(seed);

module.exports = seed;
