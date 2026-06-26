import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-700 text-white p-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          🎓 Student Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-3 gap-6 p-10">

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold">📚 My Courses</h2>
          <p className="text-4xl mt-4">3</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold">📖 Lessons</h2>
          <p className="text-4xl mt-4">12</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold">📈 Progress</h2>
          <p className="text-4xl mt-4">40%</p>
        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;