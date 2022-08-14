function g1(){
    console.log("Good morning");
}
function g2(name){
    // console.log("Good morning"+name); noob 
    console.log(`Good morning ${name}`); //pro
}
// setTimeout(g1, 2000);// takes argument as(func, time, func argument)
// setTimeout(g1(),2000); Error as you can't call the function
// setTimeout(g2, 2000,"Kapil");

// clearTimeout
// if you dont want to execute settimeout then you can use clearTimeout
// let timeoutId=setTimeout(g1,2000); 
// console.log("timeout");
// clearTimeout(timeoutId);       

// setinterval
let intervalid=setInterval(g1, 2000);
clearInterval(intervalid);

// to display timeout
function displaytime(){
    time= new Date();
    // console.log(time);
    document.getElementById('time').innerHTML=time;
}
// displaytime();
setInterval(displaytime ,1000); 