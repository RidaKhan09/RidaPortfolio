import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
     const res = await axios.post("http://localhost:5000/api/admin/login", form);

      localStorage.setItem("adminToken", res.data.token);
      localStorage.setItem("adminEmail", res.data.email); // 👈 add this
      navigate("/admin/dashboard"); // redirect to admin dashboard
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-pink-500 text-center">Admin Login</h2>
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-3 rounded bg-gray-800" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-3 rounded bg-gray-800" />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full py-3 bg-pink-500 hover:bg-pink-600 rounded font-semibold">Login</button>
      </form>
    </div>
  );
};

export default Login;
