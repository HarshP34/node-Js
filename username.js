const express=require('express');
const fs=require('fs');
const bodyParser=require('body-parser');
let username;
let flag=0;
const app=express();
const loginRoutes=require('./username/login');
const messageRoutes=require('./username/message');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/login',loginRoutes);
app.use(messageRoutes);
app.listen(3000);

