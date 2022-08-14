const express=require('express');
const path=require('path');
const app = express();

// serving static files using express
// such file which is available to all for download
app.use('/static/', express.static('static'));


// PUG set template engine
app.set('view engine', 'pug');

//set the template directory
app.set('views',path.join(__dirname,'views'));

// pug demo endpoint
app.get('/demo',(req, res) => {
    res.status(200).render('demo',{title:'Hello',message:'Hello boy'});
})
const port=80;
app.get('/',(req,res)=>{
    res.send('This is my response');
})
app.get('/about',(req,res)=>{
    res.status(203).send('This is my about response');
})
app.get('/kapi',(req,res)=>{
    res.status(404).send('This page not found');
})
app.get('/services',(req,res)=>{
    res.send('This is my services response');
})
app.listen(port,()=>{
    console.log(`listen on port ${port}`);
});