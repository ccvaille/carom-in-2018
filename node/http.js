const http = require('http');

var server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.on('finish', () => {
        console.log('finish！！！！！！！');
    })

    res.end('Hello node world \n');
})

server.on('connection', () => {
    console.log('connect>>>>>>');
})



server.listen(8000, '127.0.0.1', ()=> {
    console.log('server running at http://127.0.0.1:8000');
})