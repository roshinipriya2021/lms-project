import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await api.get("/courses");
      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 p-10">
        <div className="text-center mb-14">

  <h1 className="text-5xl font-extrabold text-gray-900">
    Explore Our Courses
  </h1>

  <p className="text-gray-500 mt-4 text-lg">
    Learn from expert instructors and build industry-ready skills.
  </p>

</div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map((course) => (
  <div
    key={course._id}
    className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
  >
    {/* Thumbnail */}
    <div className="relative">

      <img
        src={
          course.thumbnail ||
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
        }
        alt={course.title}
        className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
        ⭐ 4.8
      </div>

      <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm">
        {course.level}
      </div>

    </div>

    {/* Content */}

    <div className="p-6">

      <h2 className="text-2xl font-bold text-gray-800">
        {course.title}
      </h2>

      <p className="text-gray-500 mt-3 line-clamp-2 leading-7">
        {course.description}
      </p>

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">
          <span>👨‍🏫 Instructor</span>
          <span className="font-semibold">
            {course.instructor?.name}
          </span>
        </div>

        <div className="flex justify-between">
          <span>📂 Category</span>
          <span>{course.category}</span>
        </div>

        <div className="flex justify-between">
          <span>⏳ Duration</span>
          <span>{course.duration}</span>
        </div>

        <div className="flex justify-between">
          <span>👨‍🎓 Students</span>
          <span>{course.studentsEnrolled || 0}</span>
        </div>

      </div>

      <div className="flex justify-between items-center mt-8">

        <h3 className="text-2xl font-bold text-blue-700">
          {course.price}
        </h3>

        <Link
          to={`/courses/${course._id}`}
          className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl transition"
        >
          View Details →
        </Link>

      </div>

    </div>

  </div>
))}
        </div>
      </div>
    </>
  );
}

export default Courses;