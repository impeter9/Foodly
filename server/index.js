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

app.post('/api/register', (req, res) => {
  console.log(req.body);
  res.send('hello');
  const {name, email, password, password2} = req.body;
  let error = [];
  // check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg:'Please fill in all fields' });
  }
  // check passwords match
  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match' });
  }
  //check passwords length
  if (password.length < 6) {
    errors.push({ msg: 'Password should be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register');
  } else {
    res.send('pass');
  }
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});

