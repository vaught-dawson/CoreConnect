const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const PhoneNumberSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "open",
    },
    number: {
      type: String,
      required: [true, "Phone number is required"],
    },
    charityId: {
      type: ObjectId,
      required: [true, "Charity is required"],
    },
  },
  { timestamps: true }
);

module.exports.PhoneNumber = mongoose.model("PhoneNumber", PhoneNumberSchema);
