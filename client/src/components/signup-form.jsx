"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SignupForm = ({ onSubmit, initialFormData }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.name || formData.name.length < 3) {
      validationErrors.name = "Name must be at least 3 characters long";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
    }
    if (!formData.password || formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const signup = async (credentials) => {
    const response = await fetch(`http://localhost:3000/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.message || "Signup failed");
    }
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    toast.promise(signup(formData), {
      loading: "Signing up...",
      success: <b>Signup successful!</b>,
      error: (err) => (
        <b>{err.message || "Signup failed. Please try again."}</b>
      ),
    });
  };

  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">{errors.name}</span>
          )}
        </div>

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
          Signup
        </button>

        <div className="mt-4 text-center">
          <span className="label-text">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary font-semibold">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
