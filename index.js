// In chrome browser's console if we see number in blue and strings in black

//  1.ways to print in javascript
// console.log helps us is printing in our console
// alert is used to give alert to user or client while submitting information again, but it is recommended not to use alert
// document.write("written in document.write")
// document.write helps us in writing in html document, recommended no to use documnet.wite

// JAVASCRIPT CONSOLE API(APPLICATION PROGRAMMING INTERFACE)
// console.log("Hello World")
// console.error("this is error");
// console.warn("this is warning");
// console.clear() to clear the console
// console.assert() to check our assertion

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4. Data types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a string";
var str2 = "This is also a string";

// Objects
var marks = {
  ravi: 34,
  shubham: 78,
  harry: 99.977,
  // "rony": 47
  // both the lines are same
  rony: 47,
};
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

// var und = undefined;
var und; //If we do not give a value to vaiable by default it is assigned undefined
// undefined means it is created and not assigned value
// console.log(und);
var n = null;
// console.log(n);
// null means it does not contain anything

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1, 2, "bablu", 4, 5];
// console.log(arr)

// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

// LOOPS IN JAVASCRIPT

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// FOR EACH LOOP
// arr.forEach(function (element) {
//   console.log(element);
// });

/*
let -> has a block scope means jab tak vurly braces hai tabtak uske existance hai
it is recommended to use let for functions
var is older now it is recommended to use let     
if you created let in funcn means its scope is for function after that its existance ends
*/

const ac = 5;
// ac++;  it throws error because ac is constant and can't be changed

// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr);

// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.shift() //it removes first element of the array
// console.log(myArr);
// const newLen = myArr.unshift("Harry")  //unshift adds first elemnet ot hte array
// console.log(newLen);
// console.log(myArr);
// myArr.sort()
// console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Harry", "Rohan"); //it replaces one time occurence of the character
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)

// JAVASCIPT DATES

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
console.log(elemClass);

// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText); 

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 
tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element
