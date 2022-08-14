//alert is used when you want your website to say something to the user
// called modale in bootstrap
// it returns nothing
// alert("this is alert notification");


//2nd argument is default argument ,always give default argument
// let a=prompt("enter your email address","eg.abc@gmail.com");
// console.log(a);

// let deletename= confirm("do you want to delete");
// console.log(deletename);

//LOOPS
let arr= [2,3,4];
// for(let i=0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }

// arr.forEach(function f(element){
//     console.log(element);
// });

// for(element in arr){
//     console.log(element);
// }

let emp={
    name:"a",salary:2,work:"engineer"
}
for(key in emp){
    console.log(`the ${key} of employee is ${emp[key]}`);
}