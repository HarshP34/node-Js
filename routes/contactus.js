const express=require('express');
const router=express.Router();


const productController=require('../controllers/contactus')

router.get('/contactus',productController.contactus)
module.exports=router;