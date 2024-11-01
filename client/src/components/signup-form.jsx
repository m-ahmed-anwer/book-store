"use client";
import Link from "next/link";
import React, { useState } from "react";

const SignupForm = ({ onSubmit, initialFormData }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email"
          className="input input-bordered"
          required
        />
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
  );
};

export default SignupForm;
