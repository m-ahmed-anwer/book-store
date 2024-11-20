"use client";
import React, { useEffect, useState } from "react";
import BookCard from "@/components/book-card";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "@/store/postSlice";

export default function Home() {
  const books = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  let content;
  if (!mounted) {
    return null;
  }

  if (postsStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (postsStatus === "succeeded") {
    content = books.map((book) => (
      <BookCard key={book._id} postId={book._id} />
    ));
  } else if (postsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div className="bg-base-200 min-h-screen ">
      <div className="flex items-center justify-center py-24 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Welcome to Book Store
          </h1>
          <p className="text-xl font-light mb-8">
            Discover your next great read at unbeatable prices.
          </p>
          <Link
            href={"/products"}
            className="btn btn-lg bg-white text-indigo-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold shadow-md"
          >
            View All Deals
          </Link>
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-4xl font-bold mb-8">New Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
          {content}
        </div>
      </div>
    </div>
  );
}
