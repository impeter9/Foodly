var express = require('express');
var bodyParser = require('body-parser');
const Controller = require('./controller.js');
const PORT = process.env.port || 3000;
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

app.get('/api/login', (req, res) => {
  res.send('Login');
});

app.get('/api/register', (req, res) => {
  res.send('Register');
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});

