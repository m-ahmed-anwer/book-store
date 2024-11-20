"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CartBadge = () => {
  const [isClient, setIsClient] = useState(false);
  const totalItems = useSelector((state) => state.cart.totalItems);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {totalItems ? (
        <span className="badge badge-sm indicator-item">{totalItems}</span>
      ) : null}
    </>
  );
};

export default CartBadge;
