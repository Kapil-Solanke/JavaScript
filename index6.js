let arrow = () => {
  console.log("this is arrow function");
};
arrow();
// setTimeout(() => {
//   document.getElementById("time").innerHTML = new Date();
// }, 1000);

// shortcut to sum
let sum = (a, b) => {
  return a + b;
};
let sum2 = (a, b) => a + b; // shortest way to sum
let half = (a) => a / 2; // if one orgument then no need of brackets
let greet = () => console.log("Greetings"); // if no return value no need of parentheses

// NEWPRINT IS AN OBJECT
let newprint = {
  // in object syntax is different
  greeting: "greetings to",
  array: ["a", "b", "c", "d", "e", "f"],
  speak() {
    /*   LEXICAL THIS -> it means kisi bhi object kar andar ek fxn banaya uske andar arrow fxn uese karte hai to jp
     this hota hai woh parents ka this hota hai, lekin agar arrow fxn use nahi kiya toh uss fxn ka apna this hota hai*/

    // this.obj means object ke andar ye wala obj
    this.array.forEach((student) => {
      console.log(this.greeting + " " + student);
    });

    this.array.forEach((student) => {
      console.log(this.greetings + " " + student);
      // by default in a fxn this means apna wala this not bahar wala
    });
  },
};
newprint.speak();
