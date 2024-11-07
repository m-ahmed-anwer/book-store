import React from "react";
import BookCard from "@/components/book-card";
import Link from "next/link";
import books from "@/data/books";

export default function Home() {
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
          {books.slice(0, 8).map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              image={book.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
