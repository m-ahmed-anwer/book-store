"use client"; // This must be at the top of the file

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const EditUser = () => {
  const router = useRouter();

  // Sample user data (replace this with actual data fetching logic)
  const userData = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    profileImage:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  };

  const [name, setName] = useState(userData.name);
  const [profileImage, setProfileImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Display the uploaded image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name
    if (!name) {
      toast.error("Name cannot be empty.");
      return;
    }

    // Validate file
    if (!profileImage) {
      toast.error("Image must be chosen");
      return;
    }

    toast.success("User Details Updated Successfully!");

    // Redirect back to the user page after a short delay
    setTimeout(() => {
      router.push(`/user/${userData.id}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-base-300 p-8">
      <div className="max-w-4xl mx-auto bg-base-200 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Edit User</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-500" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500" htmlFor="profileImage">
              Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              onChange={handleFileChange}
              className={`file-input file-input-bordered w-full max-w-xs `}
            />
          </div>
          {profileImage && (
            <div className="mb-4">
              <Image
                width={150}
                height={200}
                src={profileImage}
                alt="Profile Preview"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </form>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default EditUser;
