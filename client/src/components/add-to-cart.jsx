"use client";

import { addItemToCart } from "@/store/cartSlice";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const userId = "672aed44b56ac350a1b8829d";

  const data = {
    _id: product._id,
    title: product.title,
    author: product.author,
    description: product.description,
    image: product.image,
    price: product.price,
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart({ userId, item: data }));
    toast.success("Added to cart");
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="btn btn-primary mt-10 w-full"
      >
        Add to Cart
      </button>
      <Toaster />
    </>
  );
};

export default AddToCartButton;
