const express = require("express");
const app = express();
require("dotenv").config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
require('./helper/db')()

const port = normalizePort(process.env.PORT || 3000);

// Routers
app.use("/home", require("./router/home"));
app.use("/category", require("./router/category"));

app.listen(port, () => {
  console.log("Server working on port " + port);
});

function normalizePort(val) {
  var port = parseInt(val, 10); // number // NaN

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
