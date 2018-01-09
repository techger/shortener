const express    = require('express'),
      bodyParser = require('body-parser'),
      path       = require('path');
      
const app = express();

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));             
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(require('./routes/routes'));

app.post('/api/shorten', function(req, res){
    
});

app.get('/:encoded_id', function(req, res){

});

app.listen(app.get('port'), function() {
  console.log('Server is running on port', app.get('port'));
});

module.exports = app;