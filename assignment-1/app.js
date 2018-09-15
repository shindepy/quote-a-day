var express=require('express');
var app=express();
var fs =require('fs');
var path = require('path');
var quotes=require('./q.json').quotes;

var port = process.env.PORT || 8080;

app.get('/',function(request,response){
  fs.readFile(path.join(__dirname,'/index.html'),'utf8', function(error,contents){
    if(error){
      response.json(404,{
          message: "Page not found"
      });
    }
    var randnumber=Math.floor((Math.random()*20)+1);
    response.end(contents.replace('{{cquote}}', quotes[randnumber-1]));
  });
 
});



app.listen(port,function(req,res){
    console.log("Started on Port: "+port);
});
