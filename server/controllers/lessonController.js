const Lesson = require("../models/Lesson.js");

// Create Lesson
const createLesson = async (req, res) => {
  try {
    const { title, description, videoUrl, duration, order, course } = req.body;

    const lesson = await Lesson.create({
      title,
      description,
      videoUrl,
      duration,
      order,
      course,
    });

    res.status(201).json({
      message: "Lesson Created Successfully",
      lesson,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Lessons
const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find().populate("course", "title");

    res.status(200).json(lessons);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Lesson By ID
const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id).populate(
      "course",
      "title"
    );

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    res.status(200).json(lesson);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Lesson
const updateLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    res.status(200).json({
      message: "Lesson Updated Successfully",
      lesson,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Lesson
const deleteLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    res.status(200).json({
      message: "Lesson Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createLesson,
  getLessons,
  getLessonById,
  updateLesson,
  deleteLesson,
};