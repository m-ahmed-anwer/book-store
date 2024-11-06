"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const login = async (credentials) => {
    const response = await fetch(`http://localhost:3000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      credentials: "include",
    });

    const result = await response.json();
    if (!result.success) {
      // toast.error(result.message);
      throw new Error(result.message || "Login failed");
    }
    console.log("Login successful", result.data);
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    toast.promise(login(formData), {
      loading: "Logging in...",
      success: <b>Login successful!</b>,
      error: <b>Could not log in. Please try again.</b>,
    });
  };

  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Enter your password"
            className="input input-bordered"
            required
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1">{errors.password}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-7">
          Login
        </button>

        <div className="mt-4 text-center">
          <span className="label-text">
            {`Don't have an account? `}
            <Link href="/auth/signup" className="text-primary font-semibold">
              Signup
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
