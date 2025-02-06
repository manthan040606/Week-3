const fs = require('fs')
const os = require('os')
const path = require('path')
const http = require('http')
const { test } = require('node:test')


const server =  http.createServer((req,res)=>{
try{
    if(req.url==='/home' && req.method==='GET'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('Welcome How Can I Help You')
        res.end()
    }
    else if (req.url.startsWith('/images') && req.method==='GET'){
        const imgpath = path.join(__dirname,req.url);
        fs.readFile(imgpath,(err,data)=>{
            if(err){
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('Image not found');
                res.end();
                return;
            }
            res.writeHead(200, { 'Content-Type': 'image/jpg' });
            res.end(data);
        })
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('Page not found');
        res.end();
    }

}
catch(err){
    console.error('Error:', err);
    res.writeHead(500, { 'content-type': 'text/html' });
    res.write('Internal Server Error');
    res.end();
}
    
})

server.listen(7007,()=>{
    console.log('Server is running on port number 7007')
})