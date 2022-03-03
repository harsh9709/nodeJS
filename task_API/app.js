// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

// var http = require('http');

// http.createServer(function (req, res) {
//   // add a HTTP header:
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);

// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.fname + " " + q.lname;
//   res.end(txt);
// }).listen(8080);

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
    res.end();
  });
}).listen(8080);

// var fs = require('fs');

// fs.writeFile('hello.txt', 'This is my kanaklata', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });


//send mail using node

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

// const express = require('express');

// const app = express();

// app.get("/",function(req,res){
//     res.send("hello");
// });

// app.post("/posts",function(req,res){

// });

// app.listen(3000);