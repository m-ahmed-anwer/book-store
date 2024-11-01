"use client";

import { addItem } from "@/store/cartSlice";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
    toast.success("Product Added to Cart!");
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
