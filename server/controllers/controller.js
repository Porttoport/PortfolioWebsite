const Projects = require("../models/Projects");

module.exports = {
  Indexs: (req, res) => {
    Projects.find()
      .sort({ timestamp: 1 })
      .then((data) => res.json({ results: data }))
      .catch((err) => res.status(400).json(err));
  },
  Show: (req, res) => {
    Projects.findOne({ _id: req.params.id })
      .then((data) => res.json({ results: data }))
      .catch((err) => res.status(400).json(err));
  },
  Create: (req, res) => {
    Projects.create(req.body)
      .then((data) => res.json({ results: data }))
      .catch((err) => res.status(400).json(err));
  },
  Update: (req, res) => {
    Projects.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((data) => res.json({ results: data }))
      .catch((err) => res.status(400).json(err));
  },
  Delete: (req, res) => {
    Projects.deleteOne({ _id: req.params.id })
      .then((data) => res.json({ results: data }))
      .catch((err) => res.status(400).json(err));
  },
};
