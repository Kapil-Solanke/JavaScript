const mongoose = require('mongoose');

// Method 1 for connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
} 

// Method 2 for connection
// mongoose.connect('mongodb://localhost:27017', function (err) {
 
//    if (err) throw err;
 
//    console.log('Successfully connected');
 
// });
const phoneschema = new mongoose.Schema({
    name: String,   
    price: Number
}); 
phoneschema.methods.speak=function speak()
{
    console.log('My brand is '+this.name);
}
const phone = mongoose.model('apple', phoneschema);

const apple= new phone({
    name:'apple',
    price:100000    
});
// console.log(apple.name)
// console.log(apple.price)
// apple.speak();

apple.save(function(err,apple) {
    if(err) return console.error(err);
    apple.speak();
 });


