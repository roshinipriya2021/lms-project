import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    description: "",
    category: "",
    thumbnail: "",
    duration: "",
    level: "",
    price: "",
  });

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await api.get(`/courses/${id}`);
      setCourse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/courses/${id}`, course);

      alert("Course Updated Successfully");

      navigate(`/courses/${id}`);
    } catch (err) {
      alert(err.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-xl w-full max-w-xl"
      >

        <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">
          Edit Course
        </h2>

        <input
          type="text"
          name="title"
          value={course.title}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          placeholder="Title"
        />

        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
          rows="4"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="category"
          value={course.category}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="thumbnail"
          value={course.thumbnail}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="duration"
          value={course.duration}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <select
          name="level"
          value={course.level}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <input
          type="text"
          name="price"
          value={course.price}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-6"
        />

        <button
          className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
        >
          Save Changes
        </button>

      </form>

    </div>
  );
}

export default EditCourse;