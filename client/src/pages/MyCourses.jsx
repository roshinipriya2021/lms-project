import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState({});

  useEffect(() => {
    fetchMyCourses();
  }, []);

  const fetchMyCourses = async () => {
    try {
      const res = await api.get("/enrollments");

      const userId = localStorage.getItem("userId");

      const myCourses = res.data.filter(
        (enrollment) => enrollment.student._id === userId
      );

      setCourses(myCourses);

      // Fetch lessons for every enrolled course
      myCourses.forEach(async (item) => {
        try {
          const lessonRes = await api.get(
            `/lessons/course/${item.course._id}`
          );

          setLessons((prev) => ({
            ...prev,
            [item.course._id]: lessonRes.data,
          }));
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          📚 My Courses
        </h1>

        {courses.length === 0 ? (
          <h2 className="text-center text-xl">
            You haven't enrolled in any courses yet.
          </h2>
        ) : (
          <div className="space-y-8">
            {courses.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h2 className="text-3xl font-bold">
                  {item.course.title}
                </h2>

                <p className="mt-2 text-lg">
                  Category: {item.course.category}
                </p>

                <p className="mt-3 text-green-600 font-bold">
                  ✅ Enrolled
                </p>

                <Link
  to={`/my-courses/${item.course._id}`}
  className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
>
  Open Course
</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MyCourses;