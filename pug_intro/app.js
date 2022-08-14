const express = require("express");
const { appendFileSync } = require("fs");
const path=require("path");
const app = express();
const host = "127.0.0.1";
const port = 80;

app.use('static',express.static('static'));
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));
app.get('/demo',(req, res) => {
    res.status(200).render('demo',{title:'title of demo',message:'description of demo'});
})
app.get("/", (req, res) => {
  // res.status(200).end("this is my application");
  // const params={title:'title of demo','content':'This is my application'};
  const con='This is my application';
  const params={'title':'title of demo',"content":con};
  res.status(200).render('demo.pug',params);
});
app.listen(port, host, () => {
  console.log(`loading at http://${host}:${port}`);
});
