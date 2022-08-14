console.log('this is mod')
let avg=(a,b)=> (a+b)/2;

// module.exports=avg; //when we have to export only one thing

// by using module.exports , we can create our own module and export or use it in other programs
module.exports={
    avg:avg,
    name:'kapil',
    
}