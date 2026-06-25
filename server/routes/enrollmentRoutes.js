const express = require("express");
const router = express.Router();

const {
  enrollCourse,
  getMyCourses,
  updateProgress,
  deleteEnrollment,
} = require("../controllers/enrollmentController");

router.post("/", enrollCourse);
router.get("/", getMyCourses);
router.put("/:id", updateProgress);
router.delete("/:id", deleteEnrollment);

module.exports = router;