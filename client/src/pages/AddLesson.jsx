import { useEffect, useState } from "react";
import api from "../services/api";

function AddLesson() {
  const [courses, setCourses] = useState([]);

  const [lesson, setLesson] = useState({
    title: "",
    description: "",
    videoUrl: "",
    course: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await api.get("/courses");
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setLesson({
      ...lesson,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/lessons", lesson);

      alert("Lesson Added Successfully!");

      setLesson({
        title: "",
        description: "",
        videoUrl: "",
        course: "",
      });

    } catch (err) {
      alert(err.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-xl w-full max-w-xl"
      >

        <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">
          Add Lesson
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Lesson Title"
          value={lesson.title}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          name="description"
          placeholder="Lesson Description"
          value={lesson.description}
          onChange={handleChange}
          rows="4"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="videoUrl"
          placeholder="YouTube Video URL"
          value={lesson.videoUrl}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <select
          name="course"
          value={lesson.course}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-6"
        >
          <option value="">Select Course</option>

          {courses.map((course) => (
            <option
              key={course._id}
              value={course._id}
            >
              {course.title}
            </option>
          ))}
        </select>

        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Add Lesson
        </button>

      </form>

    </div>
  );
}

export default AddLesson;