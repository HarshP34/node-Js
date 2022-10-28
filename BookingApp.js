const express=require('express')

const bodyParser=require('body-parser');

const sequelize=require('./util/database')

const app=express();

app.use(bodyParser.json({ extended: false }));

const cors=require('cors');

app.use(cors());

const adminRoutes=require('./routes1/admin');

app.use('/admin',adminRoutes);

sequelize.sync()
.then()
.catch(err=>console.log(err));






app.listen(3000);