import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/admin/register", form);
      navigate("/admin/login");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-pink-500 text-center">Admin Register</h2>
        <input name="username" placeholder="Username" onChange={handleChange} className="w-full p-3 rounded bg-gray-800" />
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-3 rounded bg-gray-800" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-3 rounded bg-gray-800" />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full py-3 bg-pink-500 hover:bg-pink-600 rounded font-semibold">Register</button>
      </form>
    </div>
  );
};

export default Register;
