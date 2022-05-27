const { Call } = require("../models/call.model");

const findAll = (req, res) => {
  Call.find()
    .then((calls) => res.json({ calls }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to get all", error: err })
    );
};

const findOne = (req, res) => {
  Call.findById(req.params.id)
    .then((call) => res.json({ call }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: `Failed to get: ${req.params.id}`, error: err })
    );
};

const create = (req, res) => {
  Call.create(req.body)
    .then((call) => res.json({ call }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to create", error: err })
    );
};

const update = (req, res) => {
  const updatedFieldData = req.body;
  Call.findOneAndUpdate({ _id: req.params.id }, updatedFieldData, {
    new: true,
    runValidators: true,
  })
    .then((call) => res.json({ call }))
    .catch((err) =>
      res.status(400).json({
        message: `Failed to update: ${req.params.id}`,
        error: err,
      })
    );
};

const deleteOne = (req, res) => {
  Call.deleteOne({ _id: req.params.id })
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
