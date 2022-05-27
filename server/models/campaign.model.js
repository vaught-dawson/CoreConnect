const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const CampaignSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Campaign name is required"],
    },
    summary: {
      type: String,
      required: [true, "Summary is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    status: {
      type: String,
      required: [true, "Status is required"],
    },
    charityId: {
      type: ObjectId,
      required: [true, "Can't have a campaign without a charity!"],
    },
  },
  { timestamps: true }
);

module.exports.Campaign = mongoose.model("Campaign", CampaignSchema);
