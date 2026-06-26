import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const navLink = (path, label) => (
    <Link
      to={path}
      className={`px-3 py-2 rounded-lg transition font-medium ${
        location.pathname === path
          ? "bg-blue-800 text-white"
          : "hover:bg-blue-600 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide"
        >
          🎓 LMS Portal
        </Link>

        <div className="flex items-center gap-4">

          {/* Guest */}
          {!token && (
            <>
              {navLink("/", "Home")}
              {navLink("/courses", "Courses")}
              {navLink("/login", "Login")}
              {navLink("/register", "Register")}
            </>
          )}

          {/* Student */}
          {token && role === "student" && (
            <>
              {navLink("/", "Home")}
              {navLink("/courses", "Courses")}
              {navLink("/my-courses", "My Courses")}

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition"
              >
                Logout
              </button>
            </>
          )}

          {/* Instructor */}
          {token && role === "instructor" && (
            <>
              {navLink("/admin", "Dashboard")}
              {navLink("/add-course", "Add Course")}
              {navLink("/add-lesson", "Add Lesson")}

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;