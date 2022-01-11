var express = require("express");
var cors = require("cors");
const routes = require("./routes");
var app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use(routes);

app.listen(3030, function () {
  console.log("Server running on port 3030");
});

module.exports = app;
