// when mod.export is object
const mod=require('./mod');
console.log(mod.avg(4,6))
console.log(mod.name)

//When mod.export is not an object
// const avg= require('./mod');
// console.log(avg(4,6))