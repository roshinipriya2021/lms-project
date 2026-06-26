const Course = require("../models/course");

// Create Course
const createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      thumbnail,
      duration,
      level,
      price,
    } = req.body;

    const course = await Course.create({
      title,
      description,
      category,
      thumbnail,
      duration,
      level,
      price,
      instructor: req.body.instructor,
    });

    const populatedCourse = await Course.findById(course._id).populate(
      "instructor",
      "name email"
    );

    res.status(201).json({
      message: "Course Created Successfully",
      course: populatedCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate(
      "instructor",
      "name email"
    );

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Course By ID
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate(
      "instructor",
      "name email"
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json(course);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Update Course
const updateCourse = async (req, res) => {
  try {

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json({
      message: "Course Updated Successfully",
      course,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Delete Course
const deleteCourse = async (req, res) => {
  try {

    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json({
      message: "Course Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};