const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

const app = express();

app.use(cors());
//Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches
//the type option, when extend is 'false' that mean the value can be only a string or array, when is true the value can be any type
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json({ extended: true }));
app.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Method", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(routes);

// If no routes match, handle 404 errors
app.use((req: any, res: any) => {
  res.status(404).send(`Can't find ${req.originalUrl} on this server`);
});

// Centralized Error Handling Middleware
app.use((err: any, req: any, res: any, next: any) => {
  // Set default status code and message
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // Send the error response
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
