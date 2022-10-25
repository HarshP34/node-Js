const path=require('path');
const routeDir=require('../Utill/path');
exports.getProducts=(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','add-product.html'));
}

exports.postProducts=(req,res,next)=>{
    res.redirect('/')
}

exports.shopProducts=(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','shop.html'))
}


