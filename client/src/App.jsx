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
import ProtectedRoute from "./components/ProtectedRoute";
import EditCourse from "./pages/EditCourse";
import MyCourseDetails from "./pages/MyCourseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/courses/:id" element={<CourseDetails />} />

        <Route
  path="/student"
  element={
    <ProtectedRoute>
      <StudentDashboard />
    </ProtectedRoute>
  }
/>
        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

        <Route
  path="/my-courses"
  element={
    <ProtectedRoute>
      <MyCourses />
    </ProtectedRoute>
  }
/>
        <Route path="/add-course" element={<AddCourse />} />

        <Route path="/add-lesson" element={<AddLesson />} />

        <Route
  path="/edit-course/:id"
  element={
    <ProtectedRoute>
      <EditCourse />
    </ProtectedRoute>
  }
/>
<Route
  path="/my-courses/:id"
  element={
    <ProtectedRoute>
      <MyCourseDetails />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;