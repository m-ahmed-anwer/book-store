"use client";
import BookCard from "@/components/book-card";
import React from "react";
import books from "@/data/books";
import { useSelector } from "react-redux";
import {
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "@/store/postSlice";

const ProductPage = () => {
  const books = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
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
    <div className="text-center bg-base-200">
      <h2 className="text-4xl font-bold  mb-8 pt-10">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {content}
      </div>
    </div>
  );
};

export default ProductPage;
