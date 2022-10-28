const express=require('express');

const router=express.Router();

const adminController=require('../controllers1/admin');

router.post('/user',adminController.addUser);

router.get('/user',adminController.getUsers);

router.get('/user/:id',adminController.deleteUserById)

module.exports=router;