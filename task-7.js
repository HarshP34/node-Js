const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/home')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<header><title>My First Page</title></header>')
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>');
        res.end();

    }
    if(req.url==='/about')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<header><title>My First Page</title></header>')
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>');
        res.end();
    }
    if(req.url==='/node')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<header><title>My First Page</title></header>')
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
        res.write('</html>');
        res.end();
    }
   
})
server.listen(4000);