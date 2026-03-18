import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../redux/features/AuthSlice'
import toast from 'react-hot-toast'

const Login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
const handleLogin = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ null check (main fix)
  if (!user) {
    return toast.error("No user found, please signup ⚠️");
  }

  if (user.email === email && user.password === password) {
    dispatch(login(user));
    toast.success("Login successful 🎉");
    navigate("/");
  } else {
    toast.error("Invalid credentials ❌");
  }
};

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow space-y-5">

        <h2 className="text-2xl font-bold text-center text-sky-600">
          Welcome Back 👋
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl border border-sky-300 
          bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-3 rounded-xl border border-sky-300 
          bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl bg-sky-500 text-white font-medium 
          hover:bg-sky-600 active:scale-95 transition"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-sky-600 font-medium hover:underline">
            Signup
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Login