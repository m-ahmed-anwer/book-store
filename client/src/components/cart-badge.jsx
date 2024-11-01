"use client";
import React from "react";
import { useSelector } from "react-redux";

const CartBadge = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <>
      {totalItems ? (
        <span className="badge badge-sm indicator-item">{totalItems}</span>
      ) : null}
    </>
  );
};

export default CartBadge;
