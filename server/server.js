const fs = require("fs");
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

fs.readdirSync(`${__dirname}/routes`)
  .filter((file) => file.endsWith(".routes.js"))
  .forEach((route) => require(`./routes/${route}`)(app));

app.get("/api", (req, res) => {
  res.json({
    message:
      "This is the API; Look at the documentation to learn how to use it!",
  });
});

app.listen(8000, () =>
  console.log("[Event] Express server is listening on port 8000")
);
