const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const CallSchema = new mongoose.Schema(
  {
    to: {
      type: String,
    },
    toFormatted: {
      type: String,
    },
    forwardedFrom: {
      type: String,
    },
    from: {
      type: String,
    },
    fromFormatted: {
      type: String,
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
    duration: {
      type: Number,
    },
    price: {
      type: String,
    },
    phoneNumberSid: {
      type: String,
    },
    campaignId: {
      type: ObjectId,
      required: [true, "Campaign is required"],
    },
    volunteerId: {
      type: ObjectId,
      required: [true, "Volunteer is required"],
    },
  },
  { timestamps: true }
);

module.exports.Call = mongoose.model("Call", CallSchema);
