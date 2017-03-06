// Node version of the server

// var http= require('http');
// http.createServer(function(req,res){
//   res.writeHead(200,{
//     'Content-Type': 'text/plain'
//   });
//   res.end('Hello World\n');
// }).listen(8000,'127.0.0.1');

//Express  version of the server

var express= require('express');
var app=express();
var _ = require('lodash');

var bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

var cats= require('./cats.js')(app);
// app.get('/',function (req,res) {
//   res.send('Hello World!');
// })

var server=app.listen(8000,function () {
  console.log('Server running at http:27.0.0.1:8000');
});
