let obj={
    name:"kapil",
    Job:"Web Developer",
}
console.log(obj);
let jsonobj= JSON.stringify(obj);
console.log(jsonobj);
jsonobj =jsonobj.replace('kapil','lapil');
console.log(jsonobj);
let newobj= JSON.parse(jsonobj);
console.log(newobj);    
let [name1,job1]=obj;
console.log(name1);