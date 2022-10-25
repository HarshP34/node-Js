const express=require('express');
const router=express.Router();

const productController=require('../controllers/success')
router.post('/success',productController.successPage);
module.exports=router;