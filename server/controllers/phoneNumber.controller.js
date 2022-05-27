const { PhoneNumber } = require("../models/phoneNumber.model");

const findAll = (req, res) => {
  PhoneNumber.find()
    .then((phoneNumbers) => res.json({ phoneNumbers }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to get all", error: err })
    );
};

const findOne = (req, res) => {
  PhoneNumber.findById(req.params.id)
    .then((phoneNumber) => res.json({ phoneNumber }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: `Failed to get: ${req.params.id}`, error: err })
    );
};

const create = (req, res) => {
  PhoneNumber.create(req.body)
    .then((phoneNumber) => res.json({ phoneNumber }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to create", error: err })
    );
};

const update = (req, res) => {
  const updatedFieldData = req.body;
  PhoneNumber.findOneAndUpdate({ _id: req.params.id }, updatedFieldData, {
    new: true,
    runValidators: true,
  })
    .then((phoneNumber) => res.json({ phoneNumber }))
    .catch((err) =>
      res.status(400).json({
        message: `Failed to update: ${req.params.id}`,
        error: err,
      })
    );
};

const deleteOne = (req, res) => {
  PhoneNumber.deleteOne({ _id: req.params.id })
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
