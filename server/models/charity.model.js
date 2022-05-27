const mongoose = require("mongoose");

const CharitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Charity name is required"],
    },
    email: {
      type: String,
      required: [true, "Charity email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    twilioAuthToken: {
      type: String,
      required: [
        true,
        "Twilio API Token is required; check out the 'Getting Started' link on the 'Home' page",
      ],
    },
    twilioSID: {
      type: String,
      required: [
        true,
        "Twilio SID is required; check out the 'Getting Started' link on the 'Home' page",
      ],
    },
    description: {
      type: String,
      required: [true, "Description of your charity is required"],
    },
    imageURL: {
      type: String,
      required: [true, "Image link of your charity is required"],
    },
    campaignIds: {
      type: Array,
      default: [],
    },
    phoneNumberIds: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports.Charity = mongoose.model("Charity", CharitySchema);
