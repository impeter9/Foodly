var express = require('express');
var bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const Controller = require('./controller.js');
const PORT = process.env.port || 3000;

const Model = require('./model.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/recipes', (req, res) => {
  Controller.getrecipe(req, res);
});

app.post('/api/recipes', (req, res) => {
  // console.log(req.body);
  Controller.postrecipe(req, res);
});

app.get('/api/login', (req, res) => {
  res.send('Login');
});

app.get('/api/register', (req, res) => {
  res.send('Register');
});

app.post('/api/register', (req, res) => {
  // console.log(req.body);
  const {name, email, password, password2} = req.body;
  let errors = [];
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
    res.status(200).send(errors);
  } else {
    Model.usermodel.findOne({ email: email})
      .then(user => {
        if (user) {
          errors.push({ msg: 'Email is already registered' });
          res.status(200).send(errors);
        } else {
          const newUser = new Model.usermodel({
            name,
            email,
            password,
          });
          bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              // set password to hash
              newUser.password = hash;
              // save user
              newUser.save()
                .then(res.status(200).send([]))
                .catch(err => console.log(err));
            }))
        }
      })
  }
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}!`);
});

