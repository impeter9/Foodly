const Model = require('./model.js');

module.exports = {
  getrecipe: (req, res) => {
    Model.getrecipe((error, data) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send(data);
      }
    }, req.params);
  },
  postrecipe: (req, res) => {
    Model.postrecipe((error, data) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send(data);
      }
    }, req.params);
  },
};
