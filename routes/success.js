const express=require('express');
const router=express.Router();
const path=require('path');

const routeDir=require('../Utill/path');

router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','success.html'));
})
module.exports=router;