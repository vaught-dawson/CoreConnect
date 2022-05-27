const { Charity } = require("../models/charity.model");

const findAll = (req, res) => {
  Charity.find()
    .then((charities) => res.json({ charities }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to get all", error: err })
    );
};

const findOne = (req, res) => {
  Charity.findById(req.params.id)
    .then((charity) => res.json({ charity }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: `Failed to get: ${req.params.id}`, error: err })
    );
};

const create = (req, res) => {
  Charity.create(req.body)
    .then((charity) => res.json({ charity }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to create", error: err })
    );
};

const update = (req, res) => {
  const updatedFieldData = req.body;
  Charity.findOneAndUpdate({ _id: req.params.id }, updatedFieldData, {
    new: true,
    runValidators: true,
  })
    .then((charity) => res.json({ charity }))
    .catch((err) =>
      res.status(400).json({
        message: `Failed to update: ${req.params.id}`,
        error: err,
      })
    );
};

const deleteOne = (req, res) => {
  Charity.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) =>
      res.status(400).json({
        message: `Failed to delete: ${req.params.id}`,
        error: err,
      })
    );
};

module.exports = {
  findOne,
  findAll,
  create,
  update,
  deleteOne,
};
