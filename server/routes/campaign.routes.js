const CampaignController = require("../controllers/campaign.controller");

module.exports = (app) => {
  app.get("/api/campaigns", CampaignController.findAll);
  app.get("/api/campaigns/:id", CampaignController.findOne);
  app.post("/api/campaigns/new", CampaignController.create);
  app.put("/api/campaigns/update/:id", CampaignController.update);
  app.delete("/api/campaigns/delete/:id", CampaignController.deleteOne);
};
