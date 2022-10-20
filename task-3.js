const http=require('http');
const server=http.createServer((req,res)=>{
   // console.log(req);
   res='harsh patel';
   console.log(res);
})
server.listen(4000);