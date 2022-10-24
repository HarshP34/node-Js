const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/" method="GET"><input type="text" id="username" name="username"><button type="submit">Login</button></form>')
  
})
module.exports=router;