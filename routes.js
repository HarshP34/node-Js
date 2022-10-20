const fs=require('fs');
  

const requestHandler=(req,res)=>{
    let url=req.url;
    const method=req.method;
    if(url==='/')
    {
        fs.readFile('message.txt',{encoding:'utf-8'},(err,data)=>{
            if(err)
            console.log(err); 
            console.log(data);
            res.write('<html>');
            res.write('<header><title>Enter Message</title></header>')
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write('</html>');
            return res.end();
        })
    }
   else if(url==='/message' && method==='POST')
   {
    const body=[];
    req.on('data',(chunk)=>{
        //console.log(chunk);
        body.push(chunk);
    })
  return req.on('end',()=>{
        const parseBody=Buffer.concat(body).toString();
  const message=parseBody.split('=')[1];
  fs.writeFile('message.txt',message,(err)=>{
    res.statusCode=302;
    res.setHeader('Location','/');
    return res.end();
  });
    })
   }
   else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<header><title>My First Page</title></header>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>');
    res.end();
   } 
  
}
//module.exports = requestHandler;
// module.exports={
//     handler:requestHandler,
//     sometext:'Some Text '
// }
exports.handler=requestHandler;
exports.sometext='Some hard core Text';