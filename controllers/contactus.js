const path=require('path');
const routeDir=require('../Utill/path');

exports.contactus=(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views','contactus.html'));
}