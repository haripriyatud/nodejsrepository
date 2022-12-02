import http from 'http';

const server = http.createServer((req,res)=> {
    if(req.url==="/"){
        res.end('Welcome to our first server page');
        return;
    }
    if(req.url==="/about"){
        res.end('Welcome to about page');
        return;
    }

    res.end('This page is not available');

})

server.listen(8000);