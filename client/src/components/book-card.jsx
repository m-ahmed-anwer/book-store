import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ id, title, author, price, image }) => {
  return (
    <Link href={`/products/${id}`} className="group">
      <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-4 flex flex-col h-full">
        <figure className="flex justify-center mb-4">
          <Image
            src={image}
            alt={title}
            width={150}
            height={200}
            className="rounded-md object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
        </figure>

        <div className="card-body text-center flex flex-col justify-between flex-grow">
          <div>
            <h2 className="card-title text-xl text-center font-bold  mb-1">
              {title}
            </h2>
            <p className="text-lg font-semibold  dark:text-indigo-600 mb-2">
              ${price}
            </p>
            <p className="text-sm  mb-4">by {author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
