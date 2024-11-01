// src/app/users/[userId]/page.jsx

import React from "react";
import Link from "next/link";
import { HiOutlinePencilAlt } from "react-icons/hi"; // Importing a pencil icon from react-icons

// Sample user data (you can replace this with actual data fetching logic)
const userData = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  profileImage:
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  orders: [
    { id: 1, title: "Order #1", date: "2023-10-01", total: "$50.00" },
    { id: 2, title: "Order #2", date: "2023-10-01", total: "$12.00" },
    { id: 3, title: "Order #3", date: "2023-10-01", total: "$50.00" },
    { id: 4, title: "Order #4", date: "2023-10-05", total: "$25.00" },
    { id: 5, title: "Order #5", date: "2023-10-05", total: "$75.00" },
  ],
};

const UserPage = async ({ params }) => {
  const { userId } = await params;

  
  const user = userData; // Replace with actual data fetching logic

  return (
    <div className="min-h-screen bg-base-300 sm:p-8 ">
      <div className="max-w-4xl mx-auto bg-base-200 shadow-lg rounded-lg p-6 relative">
      
        <Link href={`/user/${userId}/edit`}>
          <HiOutlinePencilAlt
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 cursor-pointer"
            size={24}
          />
        </Link>

      
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={user.profileImage}
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        {userData.orders.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {user.orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-base-100 border border-base-200 rounded-lg p-4 shadow-sm"
                >
                  <h3 className="font-bold">{order.title}</h3>
                  <p className="text-gray-600">Date: {order.date}</p>
                  <p>Total: {order.total}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserPage;
