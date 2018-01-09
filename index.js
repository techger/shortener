
var express = require('express');
var app = express();

app.get('/', function(req, res){

});

app.post('/api/shorten', function(req, res){
    
});

app.get('/:encoded_id', function(req, res){

});

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});