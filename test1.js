var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');


http.createServer(function(req, res){
  var thisUrl = url.parse(req.url);
  var cPath = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    console.log( " thisUrl   is: %s", thisUrl.pathname);

    switch(cPath){
      case '':
          res.writeHead(200, { 'Content-Type': 'text/plain'});
          res.end('Homepage');
          break;
      case '/about':
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('about');
          break;
      default:
              res.writeHead(404, { 'Content-Type': 'text/plain'});
              res.end('Not Found!');
              break;
    }
}).listen(3000);
console.log('Server starte on localhost:3000; press Ctrl-C to terminate...');
