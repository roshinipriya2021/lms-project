import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName");

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-700 text-white p-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            👨‍🏫 Instructor Dashboard
          </h1>
          <p className="mt-2 text-lg">
            Welcome, {userName} 👋
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.clear();
            navigate("/");
            window.location.reload();
          }}
          className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-3">
            📚 Add Course
          </h2>

          <p className="text-gray-600 mb-6">
            Create a brand new course.
          </p>

          <button
            onClick={() => navigate("/add-course")}
            className="bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            Add Course
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-3">
            🎥 Add Lesson
          </h2>

          <p className="text-gray-600 mb-6">
            Add lessons to existing courses.
          </p>

          <button
            onClick={() => navigate("/add-lesson")}
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            Add Lesson
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-3">
            📖 View Courses
          </h2>

          <p className="text-gray-600 mb-6">
            View all available courses.
          </p>

          <button
            onClick={() => navigate("/courses")}
            className="bg-purple-600 text-white px-5 py-2 rounded-lg"
          >
            View Courses
          </button>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;