const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const { log } = require('console');
const { url } = require('inspector');

const server = http.createServer((req,res) => {
    console.log('request made')
    console.log(req.url, req.method)
    const randomnum = _.random(1,10);
    console.log(randomnum);

    res.setHeader('Content-Type','Text/html');

    let path = './HTML_FILES/';
    switch(req.url) {
    case '/':
     path += 'index.html';
     break;
    case '/index':
     path += 'index.html';
     break;
    case '/about':
        path += 'about.html';
        break;
    default:
        path += '404.html';
        break;
    }

    fs.readFile(path, (err,data) =>
{
    if(err) {
        console.log(err);
        res.end();}
    else{
        res.write(data);
        res.end();}
})
});

server.listen( 3000,'localhost' , () =>
console.log('listinening request port 3000'));
