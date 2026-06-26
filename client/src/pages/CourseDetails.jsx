import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await api.get(`/courses/${id}`);
      setCourse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEnroll = async () => {
    try {
      const student = localStorage.getItem("userId");

      const res = await api.post("/enrollments", {
        student,
        course: course._id,
      });

      alert(res.data.message);

      fetchCourse();
    } catch (err) {
      alert(err.response?.data?.message || "Enrollment Failed");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/courses/${course._id}`);

      alert("Course Deleted Successfully");

      navigate("/courses");
    } catch (err) {
      alert(err.response?.data?.message || "Delete Failed");
    }
  };

  const handleEdit = () => {
  navigate(`/edit-course/${course._id}`);
};
  const handleAddLesson = () => {
    navigate("/add-lesson");
  };

  if (!course) {
    return (
      <div className="text-center mt-20 text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold mb-5">
          {course.title}
        </h1>

        <p className="text-gray-700 text-lg mb-6">
          {course.description}
        </p>

        <div className="space-y-3 text-lg">

          <p>
            📂 <strong>Category:</strong> {course.category}
          </p>

          <p>
            ⏳ <strong>Duration:</strong> {course.duration}
          </p>

          <p>
            🎯 <strong>Level:</strong> {course.level}
          </p>

          <p>
            💰 <strong>Price:</strong> {course.price}
          </p>

          <p>
            👨‍🏫 <strong>Instructor:</strong>{" "}
            {course.instructor?.name}
          </p>

          <p>
            👨‍🎓 <strong>Students Enrolled:</strong>{" "}
            {course.studentsEnrolled || 0}
          </p>

        </div>

        {role === "student" ? (

          <button
            onClick={handleEnroll}
            className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
          >
            Enroll Now
          </button>

        ) : (

          <div className="flex gap-4 mt-8 flex-wrap">

            <button
              onClick={handleEdit}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg"
            >
              ✏️ Edit Course
            </button>

            <button
              onClick={handleAddLesson}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              ➕ Add Lesson
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
            >
              🗑️ Delete Course
            </button>

          </div>

        )}

      </div>
    </>
  );
}

export default CourseDetails;