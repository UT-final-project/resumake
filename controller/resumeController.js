const db = require("../models");

// Modify the following operations to fit specific front end requirements
module.exports = {
  findAll: function(req, res) {
    db.Resume
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Finds a resume matching the author ID
  findByAuthor: function(req, res) {
    db.Resume
      .findOne({ author: req.params.id })
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Resume
      .create(req.body)
      .then(dbModel => res.status(201).json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Resume
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Resume
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};