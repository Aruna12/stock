var http=require('http');
var dt=require('./module');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("the date and time are:"+dt.myDate());
  res.end('hello world');
}).listen(8080);
