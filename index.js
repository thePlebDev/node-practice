var http = require('http');
var fs = require('fs');
var path = require('path');
var wss = require('./websockets-server');

var extract = require ('./extract');



var handleError = function (err,res){
  filePath = path.resolve(__dirname, 'app', 'error.html')
  fs.readFile(filePath,(err,data)=>res.end(data))

}


var server = http.createServer(function(req,res){
  console.log('responding to request');

  var filePath = extract(req.url)
  fs.readFile(filePath, function(err,data){
    if(err){
      handleError(err,res);
      return;
    }else{
    res.setHeader('Content-Type', 'text/html');
    res.end(data)
  }
  })
});
server.listen(3000)
