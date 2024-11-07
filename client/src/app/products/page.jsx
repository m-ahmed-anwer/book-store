import BookCard from "@/components/book-card";
import React from "react";
import books from "@/data/books";

const ProductPage = () => {
  return (
    <div className="text-center bg-base-200">
      <h2 className="text-4xl font-bold  mb-8 pt-10">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {books.map((book) => (
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
  );
};

export default ProductPage;
