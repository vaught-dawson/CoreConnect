const CharityController = require("../controllers/charity.controller");

module.exports = (app) => {
  app.get("/api/charities", CharityController.findAll);
  app.get("/api/charities/:id", CharityController.findOne);
  app.post("/api/charities/new", CharityController.create);
  app.put("/api/charities/update/:id", CharityController.update);
  app.delete("/api/charities/delete/:id", CharityController.deleteOne);
};
