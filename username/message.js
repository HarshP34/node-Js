const express=require('express');
const router=express.Router();
const fs=require('fs');
router.get('/',(req,res,next)=>{
fs.readFile('message.txt',{encoding:'utf-8'},(err,data)=>{
    console.log(data);
            res.send(`<form onsubmit="
            document.getElementById('username').value=localStorage.getItem('username')
          " action="/" method="POST"><body>${data}</body><br><input type="text" id="message" name="message"><input hidden type="text" id="username" name="username"><button type="submit">Enter Message</button></form>`);
        }) 
     
})

router.post('/',(req,res,next)=>{
  //  console.log(req.body);
    fs.appendFile('message.txt',`${req.body.username}:${req.body.message},`,()=>{
        res.redirect("/");
    });      
})




module.exports=router;