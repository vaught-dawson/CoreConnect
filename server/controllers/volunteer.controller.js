const { Volunteer } = require("../models/volunteer.model");

const findAll = (req, res) => {
  Volunteer.find()
    .then((volunteers) => res.json({ volunteers }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to get all", error: err })
    );
};

const findOne = (req, res) => {
  Volunteer.findById(req.params.id)
    .then((volunteer) => res.json({ volunteer }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: `Failed to get: ${req.params.id}`, error: err })
    );
};

const create = (req, res) => {
  Volunteer.create(req.body)
    .then((volunteer) => res.json({ volunteer }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to create", error: err })
    );
};

const update = (req, res) => {
  const updatedFieldData = req.body;
  Volunteer.findOneAndUpdate({ _id: req.params.id }, updatedFieldData, {
    new: true,
    runValidators: true,
  })
    .then((volunteer) => res.json({ volunteer }))
    .catch((err) =>
      res.status(400).json({
        message: `Failed to update: ${req.params.id}`,
        error: err,
      })
    );
};

const deleteOne = (req, res) => {
  Volunteer.deleteOne({ _id: req.params.id })
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
