const path=require('path');
const routeDir=require('../Utill/path');

exports.successPage=(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','success.html'));
}

exports.errorPage=(req,res,next)=>{
    res.status(404).sendFile(path.join(routeDir,'views','404.html'))
}