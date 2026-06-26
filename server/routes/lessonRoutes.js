const express = require("express");
const router = express.Router();

const {
  createLesson,
  getLessons,
  getLessonsByCourse,
  getLessonById,
  updateLesson,
  deleteLesson,
} = require("../controllers/lessonController");

console.log({
  createLesson,
  getLessons,
  getLessonsByCourse,
  getLessonById,
});

router.post("/", createLesson);

router.get("/", getLessons);

router.get("/course/:courseId", getLessonsByCourse);

router.get("/:id", getLessonById);

router.put("/:id", updateLesson);

router.delete("/:id", deleteLesson);

module.exports = router;