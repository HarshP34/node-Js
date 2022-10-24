const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><label for="title">Title:</label><input type="text"name="title"><label for="title">Size:</label><input type="text" name="size"><button type="submit">Add Product</button></form');
})
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello to node js</h1>');
})

app.listen(4000);