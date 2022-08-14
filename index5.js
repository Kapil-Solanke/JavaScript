let dt= new Date();
console.log(dt);
// let d= new Date(2020) any constant in date constructor returns starting time of javasript


// let d =new Date(year, month, day, hour, minute, second);
// let d = new Date('2020','8','15','5','6','1');
// let newdate = new Date(2020,8,'15','5','6','1');

// console.log(d);
// console.log(newdate.getDay( ));

//*
let d= new Date();
d.setDate(2);
console.log(d);
setInterval(display, 1000);
function display(){
    document.getElementById('time').innerHTML=new Date();
}