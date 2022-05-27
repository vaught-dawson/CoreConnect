const PhoneNumberController = require("../controllers/phoneNumber.controller");

module.exports = (app) => {
  app.get("/api/phoneNumbers", PhoneNumberController.findAll);
  app.get("/api/phoneNumbers/:id", PhoneNumberController.findOne);
  app.post("/api/phoneNumbers/new", PhoneNumberController.create);
  app.put("/api/phoneNumbers/update/:id", PhoneNumberController.update);
  app.delete("/api/phoneNumbers/delete/:id", PhoneNumberController.deleteOne);
};
