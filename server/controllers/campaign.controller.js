const { Campaign } = require("../models/campaign.model");

const findAll = (req, res) => {
  Campaign.find()
    .then((campaigns) => res.json({ campaigns }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to get all", error: err })
    );
};

const findOne = (req, res) => {
  Campaign.findById(req.params.id)
    .then((campaign) => res.json({ campaign }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: `Failed to get: ${req.params.id}`, error: err })
    );
};

const create = (req, res) => {
  Campaign.create(req.body)
    .then((campaign) => res.json({ campaign }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to create", error: err })
    );
};

const update = (req, res) => {
  const updatedFieldData = req.body;
  Campaign.findOneAndUpdate({ _id: req.params.id }, updatedFieldData, {
    new: true,
    runValidators: true,
  })
    .then((campaign) => res.json({ campaign }))
    .catch((err) =>
      res.status(400).json({
        message: `Failed to update: ${req.params.id}`,
        error: err,
      })
    );
};

const deleteOne = (req, res) => {
  Campaign.deleteOne({ _id: req.params.id })
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
