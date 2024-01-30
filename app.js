const http=require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url , req.method , req.headers);
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head>My first page</head>');
    res.write('<body><h1>Hello node js</body>');
    res.write('</html>');
    res.end()
})
server.listen(3000)