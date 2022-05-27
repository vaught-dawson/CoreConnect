const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const VolunteerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    joinedCampaignIds: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports.Volunteer = mongoose.model("Volunteer", VolunteerSchema);
