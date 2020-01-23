const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
  .then(() => console.log('mongoDB Connected...'))
  .then((err) => console.log(err));
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