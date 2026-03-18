import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../redux/features/AuthSlice'
import toast from 'react-hot-toast'

const SignUpPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

 const handleSignUp = () => {
  if (!email || !password) {
    return toast.error("Please fill all fields ⚠️");
  }

  const userData = { email, password };

  // ✅ localStorage এ save (important)
  localStorage.setItem("user", JSON.stringify(userData));

  dispatch(signUp(userData));

  toast.success("Account created successfully 🎉");
  navigate("/login");
};

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow space-y-5">

        <h2 className="text-2xl font-bold text-center text-sky-600">
          Create Account 🚀
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl border border-sky-300 
          bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-3 rounded-xl border border-sky-300 
          bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleSignUp}
          className="w-full py-3 rounded-xl bg-sky-500 text-white font-medium 
          hover:bg-sky-600 active:scale-95 transition"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-600 font-medium hover:underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  )
}

export default SignUpPage