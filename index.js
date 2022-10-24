const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

// Disable cors
app.use(cors());

// Root directory
app.get("/", (req, res) => {});

// app is listening on port

app.listen(port, () => {
  console.log("Dev Sparkle Server running on port", port);
});
