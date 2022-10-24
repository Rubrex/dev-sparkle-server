const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

// Acquire Data
const courses = require("./data/courses.json");
const courses_material = require("./data/course_materials.json");

// Disable cors
app.use(cors());

// Root directory
app.get("/", (req, res) => {
  res.send("Dev Sparkle Server is running");
});

// Courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

// app is listening on port

app.listen(port, () => {
  console.log("Dev Sparkle Server running on port", port);
});
