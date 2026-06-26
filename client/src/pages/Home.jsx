import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/hero.jpg";

function Home() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-8 py-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side */}
            <div>

              {token && (
                <p className="text-green-600 text-xl font-semibold mb-4">
                  👋 Welcome back, {userName}
                </p>
              )}

              <h1 className="text-6xl font-extrabold leading-tight text-gray-900">
                Learn <span className="text-blue-700">Anytime</span>,
                <br />
                Anywhere.
              </h1>

              <p className="mt-6 text-xl text-gray-600 leading-8">
                Learn from expert instructors, build real-world skills,
                and accelerate your career with interactive online courses.
              </p>

              <div className="mt-10 flex gap-5">

                <button
                  onClick={() => navigate("/courses")}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
                >
                  Explore Courses →
                </button>

                {!token && (
                  <button
                    onClick={() => navigate("/register")}
                    className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
                  >
                    Join Now
                  </button>
                )}

              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-14">

                <div className="bg-white rounded-xl shadow-md p-5 text-center">
                  <h2 className="text-3xl font-bold text-blue-700">50+</h2>
                  <p className="text-gray-600 mt-2">Courses</p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5 text-center">
                  <h2 className="text-3xl font-bold text-blue-700">500+</h2>
                  <p className="text-gray-600 mt-2">Students</p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5 text-center">
                  <h2 className="text-3xl font-bold text-blue-700">15+</h2>
                  <p className="text-gray-600 mt-2">Instructors</p>
                </div>

              </div>

            </div>

            {/* Right Side */}
            <div className="flex justify-center">

              <img
                src={hero}
                alt="Online Learning"
                className="w-full max-w-lg drop-shadow-2xl"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose LMS Portal?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-slate-50 rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">
                Expert Courses
              </h3>
              <p className="text-gray-600">
                Learn from experienced instructors with practical knowledge.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🎥</div>
              <h3 className="text-xl font-bold mb-3">
                Video Lessons
              </h3>
              <p className="text-gray-600">
                Watch high-quality video lessons anytime.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">
                Track Progress
              </h3>
              <p className="text-gray-600">
                Monitor your learning journey with progress tracking.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">
                Career Growth
              </h3>
              <p className="text-gray-600">
                Gain valuable skills to achieve your career goals.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;