"use client";
import { selectPostById } from "@/store/postSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const BookCard = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) return null;

  const defaultImage = "https://www.istockphoto.com/photos/image-not-found";

  return (
    <Link href={`/products/${postId}`} className="group">
      <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-4 flex flex-col h-full">
        <figure className="flex justify-center mb-4">
          <Image
            src={post.image || defaultImage}
            alt={post.title}
            width={200}
            height={200}
            className="rounded-md object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
        </figure>

        <div className="card-body text-center flex flex-col justify-between flex-grow">
          <div>
            <h2 className="card-title text-xl text-center font-bold  mb-1">
              {post.title}
            </h2>
            <p className="text-lg font-semibold  dark:text-indigo-600 mb-2">
              ${post.price}
            </p>
            <p className="text-sm  mb-4">by {post.author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
