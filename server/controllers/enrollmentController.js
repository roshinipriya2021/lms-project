const Enrollment = require("../models/Enrollment");
const Course = require("../models/course");
const enrollCourse = async (req, res) => {
  console.log(req.body);
  try {
    const { student, course } = req.body;

    const existingEnrollment = await Enrollment.findOne({
      student,
      course,
    });

    if (existingEnrollment) {
      return res.status(400).json({
        message: "Already Enrolled",
      });
    }

    const enrollment = await Enrollment.create({
      student,
      course,
    });
    await Course.findByIdAndUpdate(course, {
    $inc: { studentsEnrolled: 1 }
});

    res.status(201).json({
      message: "Enrollment Successful",
      enrollment,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get My Courses
const getMyCourses = async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate("student", "name email")
      .populate("course", "title category");

    res.status(200).json(enrollments);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Progress
const updateProgress = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!enrollment) {
      return res.status(404).json({
        message: "Enrollment not found",
      });
    }

    res.status(200).json({
      message: "Progress Updated",
      enrollment,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Enrollment
const deleteEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);

if (!enrollment) {
  return res.status(404).json({
    message: "Enrollment not found",
  });
}

await Course.findByIdAndUpdate(enrollment.course, {
  $inc: { studentsEnrolled: -1 },
});

res.status(200).json({
  message: "Enrollment Deleted",
});

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  enrollCourse,
  getMyCourses,
  updateProgress,
  deleteEnrollment,
};