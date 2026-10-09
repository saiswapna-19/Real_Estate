import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (!isLogin) {
      if (!formData.name || !formData.confirmPassword) {
        setMessage("Please fill in all required fields.");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setMessage("Passwords do not match.");
        return;
      }
    }

    setMessage(
      isLogin
        ? "Login successful! Welcome back."
        : "Account created successfully!"
    );
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setMessage("");

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#F7F7F5] px-6 py-14 md:px-10">

      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-[#E7E5E0] bg-white shadow-sm lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden bg-[#172033] p-10 text-white lg:flex lg:flex-col lg:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6B77A]">
              RealEstate
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-tight">
              Find a place you will be proud to call home.
            </h1>

            <p className="mt-5 leading-7 text-white/65">
              Explore beautiful properties and connect with experienced
              real estate professionals.
            </p>
          </div>

          <div className="space-y-4 text-sm text-white/80">
            <div className="flex items-center gap-3">
              <CheckCircle size={18} />
              Verified properties
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle size={18} />
              Experienced agents
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle size={18} />
              Simple property search
            </div>
          </div>

        </div>

        {/* Form Side */}
        <div className="p-7 md:p-10">

          {/* Heading */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
              {isLogin ? "Welcome back" : "Get started"}
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#172033]">
              {isLogin ? "Sign in to your account" : "Create your account"}
            </h2>

            <p className="mt-3 text-[#667085]">
              {isLogin
                ? "Sign in to continue exploring properties."
                : "Create an account to start exploring properties."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8">

            {/* Name */}
            {!isLogin && (
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-[#172033]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#E7E5E0] bg-[#FAFAF8] px-4 py-3 outline-none transition focus:border-[#B08D57]"
                />
              </div>
            )}

            {/* Email */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-[#172033]">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-[#E7E5E0] bg-[#FAFAF8] px-4 py-3 outline-none transition focus:border-[#B08D57]"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-[#172033]">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-[#E7E5E0] bg-[#FAFAF8] px-4 py-3 outline-none transition focus:border-[#B08D57]"
              />
            </div>

            {/* Confirm Password */}
            {!isLogin && (
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-[#172033]">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-[#E7E5E0] bg-[#FAFAF8] px-4 py-3 outline-none transition focus:border-[#B08D57]"
                />
              </div>
            )}

            {/* Message */}
            {message && (
              <div className="mb-5 rounded-xl bg-[#F7F7F5] px-4 py-3 text-sm text-[#172033]">
                {message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#172033] px-5 py-3.5 font-medium text-white transition hover:bg-[#26344D]"
            >
              {isLogin ? "Login" : "Create Account"}
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Switch */}
          <div className="mt-7 text-center text-sm text-[#667085]">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={switchMode}
              className="ml-2 font-semibold text-[#172033] hover:text-[#B08D57]"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </div>

          {/* Back */}
          <Link
            to="/"
            className="mt-6 block text-center text-sm text-[#667085] transition hover:text-[#172033]"
          >
            Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}

