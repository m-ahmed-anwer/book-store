"use client";
import Link from "next/link";
import React, { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        Login
      </button>
      <div className="mt-4 text-center">
        <span className="label-text">
          {`Don't have an account?`}
          <Link href="/auth/signup" className="text-primary font-semibold">
            Signup
          </Link>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
