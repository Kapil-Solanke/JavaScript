const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const host='127.0.0.1';
const port=80;

app.use('/static',express.static('/static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req, res) => {
    const params={};
    res.status(200).render('index.pug',params);
})
app.listen(port,host,(req,res)=>{
    console.log(`Loading at http://${host}:${port}/`);
})