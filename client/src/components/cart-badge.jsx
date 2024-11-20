"use client";
import { selectCartTotalItems } from "@/store/cartSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartBadge = () => {
  const totalItems = useSelector(selectCartTotalItems);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {totalItems > 0 && (
        <span className="badge badge-sm indicator-item">{totalItems}</span>
      )}
    </>
  );
};

export default CartBadge;
