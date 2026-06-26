import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function MyCourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetchCourse();
    fetchLessons();
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await api.get(`/courses/${id}`);
      setCourse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLessons = async () => {
    try {
      const res = await api.get(`/lessons/course/${id}`);
      setLessons(res.data);
    } catch (err) {
      console.log(err);
    }
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

      <div className="max-w-5xl mx-auto p-10">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h1 className="text-4xl font-bold">
            {course.title}
          </h1>

          <p className="text-gray-600 mt-3">
            {course.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mt-6">

            <div>
              <p className="font-bold">Category</p>
              <p>{course.category}</p>
            </div>

            <div>
              <p className="font-bold">Instructor</p>
              <p>{course.instructor?.name}</p>
            </div>

          </div>

          <hr className="my-8" />

          <h2 className="text-3xl font-bold mb-6">
            📚 Course Lessons
          </h2>

          {lessons.length === 0 ? (
            <p className="text-gray-500">
              No lessons added yet.
            </p>
          ) : (
            <div className="space-y-5">

              {lessons.map((lesson) => (
                <div
                  key={lesson._id}
                  className="border rounded-lg p-5 hover:shadow-md transition"
                >
                  <h3 className="text-2xl font-semibold">
                    {lesson.order}. {lesson.title}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    {lesson.description}
                  </p>

                  <p className="mt-2 text-blue-600">
                    ⏱ {lesson.duration}
                  </p>

                  {lesson.videoUrl && (
                    <a
                      href={lesson.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      ▶ Watch Lesson
                    </a>
                  )}
                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default MyCourseDetails;