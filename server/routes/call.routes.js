const CallController = require("../controllers/call.controller");

module.exports = (app) => {
  app.get("/api/calls", CallController.findAll);
  app.get("/api/calls/:id", CallController.findOne);
  app.post("/api/calls/new", CallController.create);
  app.put("/api/calls/update/:id", CallController.update);
  app.delete("/api/calls/delete/:id", CallController.deleteOne);
};
