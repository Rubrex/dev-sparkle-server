const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

// Acquire Data
const courses = require("./data/courses.json");
const courses_material = require("./data/course_materials.json");
const faq = require("./data/faq.json");

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

// Courses_Material
app.get("/courses/:courseID", (req, res) => {
  const id = req.params.courseID;
  const selectedCourse = courses_material.filter((course) => course._id === id);
  res.send(selectedCourse);
});

// FAQ
app.get("/faq", (req, res) => {
  res.send(faq);
});

// app is listening on port

app.listen(port, () => {
  console.log("Dev Sparkle Server running on port", port);
});
