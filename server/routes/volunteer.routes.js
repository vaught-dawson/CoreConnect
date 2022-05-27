const VolunteerController = require("../controllers/volunteer.controller");

module.exports = (app) => {
  app.get("/api/volunteers", VolunteerController.findAll);
  app.get("/api/volunteers/:id", VolunteerController.findOne);
  app.post("/api/volunteers/new", VolunteerController.create);
  app.put("/api/volunteers/update/:id", VolunteerController.update);
  app.delete("/api/volunteers/delete/:id", VolunteerController.deleteOne);
};
