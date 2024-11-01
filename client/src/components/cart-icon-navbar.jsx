"use client";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const CartIcon = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);
  const total = useSelector((state) => state.cart.total);

  return (
    <div className="card-body">
      <span className="text-lg font-bold">{totalItems} Items</span>
      <span className="text-info">Subtotal: ${total.toFixed(2)}</span>
      <div className="card-actions">
        <Link href={"/cart"} className="btn btn-ghost bg-slate-200 btn-block">
          View cart
        </Link>
      </div>
    </div>
  );
};

export default CartIcon;
