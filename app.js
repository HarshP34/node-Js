const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const adminRoutes=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');
const contactRoutes=require('./routes/contactus.js');
const successRoutes=require('./routes/success.js')
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'html');
app.set('views', 'views');
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);
const errorcontroller=require('./controllers/success');
app.use(errorcontroller.errorPage)
app.listen(4000);