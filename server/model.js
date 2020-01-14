const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
var MyModel = mongoose.model('Recipes', new mongoose.Schema({
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

module.exports = {
  getrecipe: (callback, data) => {
    MyModel.find({}, (err, data) => {
      if (err) {
        return err;
      } else {
        callback(null, data);
      }
    })
  },
  postrecipe: (callback, data) => {
    var Recipe = new MyModel(data);
    Recipe.save((err, data) => {
      if (err) {
        return err;
      } else {
        callback(null,data);
      }
    });
  },
}