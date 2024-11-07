import React from "react";
import books from "@/data/books";
import Link from "next/link";
import AddToCartButton from "@/components/add-to-cart";
import Image from "next/image";

const ProductPage = async ({ params }) => {
  const { productId } = await params;

  const product = books.find((book) => book.id === parseInt(productId));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-base-200 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          {`We're sorry, but the product you're looking for does not exist.`}
        </p>
        <Link href={"/products"} className="btn btn-primary">
          Go Back to Products
        </Link>
      </div>
    );
  }

  const { title, author, price, description, image } = product;

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-base-200">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl w-full space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 p-4">
          <Image
            src={image}
            width={500}
            height={500}
            alt={`image`}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 p-4 space-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h2 className="text-lg text-gray-600 dark:text-gray-530">{author}</h2>
          <p className="text-xl ">${price}</p>
          <p className="text-gray-700  dark:text-gray-500 pb-10">
            {description}
          </p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
