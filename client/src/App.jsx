import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import MyCourses from "./pages/MyCourses";
import AddCourse from "./pages/AddCourse";
import AddLesson from "./pages/AddLesson";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/courses/:id" element={<CourseDetails />} />

        <Route path="/student" element={<StudentDashboard />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/my-courses" element={<MyCourses />} />

        <Route path="/add-course" element={<AddCourse />} />

        <Route path="/add-lesson" element={<AddLesson />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;