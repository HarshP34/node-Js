const express =require('express')
const router=express.Router();
const path=require('path');

const routeDir=require('../Utill/path');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','shop.html'))
})
module.exports=router;