const express=require('express');

const router=express.Router();

const adminController=require('../controllers1/admin');

router.post('/expense',adminController.addUser);

router.get('/expense',adminController.getUsers);

router.put('/edit-expense/:id',adminController.posteditUser);

router.get('/edit-expense/:id',adminController.geteditUser);

router.delete('/delete-expense/:id',adminController.deleteUserById)

module.exports=router;