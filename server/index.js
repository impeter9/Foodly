var express = require('express');
var bodyParser = require('body-parser');
const Controller = require('./controller.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/recipes', (req, res) => {
  Controller.getrecipe(req, res);
});

app.post('/api/recipes', (req, res) => {
  console.log(req.body);
  Controller.postrecipe(req, res);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

