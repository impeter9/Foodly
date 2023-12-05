const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
  .then(() => console.log('mongoDB Connected...'))
  .catch(err => console.log(err));
var RecipeModel = mongoose.model('Recipe', new mongoose.Schema({
  updated: { type: Date, default: Date.now },
  label: String,
  image: String,
  sourceUrl: String,
  edmUrl: String,
  servings: Number,
  dietLabels: [{ type: String }],
  healthLabels: [{ type: String }],
  calories: Number,
  ingredients: [{ type: String }],
}));
var UserModel = mongoose.model('User', new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  date: {type: Date, default: Date.now}
}));

module.exports = {
  usermodel: UserModel,
  getrecipe: (callback) => {
    RecipeModel.find({}, (err, data) => {
      if (err) {
        return err;
      } else {
        callback(null, data);
      }
    })
  },
  postrecipe: (callback, data) => {
    var Recipe = new RecipeModel(data);
    Recipe.save((err, data) => {
      if (err) {
        return err;
      } else {
        callback(null, data);
      }
    });
  },
  checkforuser: (callback, email) => {
    UserModel.findOne({ email: email})
      .then(user => {
        if (user) {
          return true;
        } else {
          return false;
        }
      });
  },

  // createnewuser: (req, res, userinfo) => {
  //   const newUser = new UserModel(userinfo);
  //   bcrypt.genSalt(10, (err, salt) =>
  //     bcrypt.hash(newUser.password, salt, (err, hash) => {
  //       if (err) throw err;
  //       // set password to hash
  //       newUser.password = hash;
  //       // save user
  //       newUser.save()
  //         .then(res.status(200).send('login'))
  //         .catch(err => console.log(err));
  //   }))
  // }

  // postrecipe: (callback, data) => {
  //   var Recipe = new RecipeModel(data);
  //   Recipe.save((err, data) => {
  //     if (err) {
  //       return err;
  //     } else {
  //       callback(null, data);
  //     }
  //   });
  // },
}