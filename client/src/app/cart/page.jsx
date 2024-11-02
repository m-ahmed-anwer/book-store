"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "@/components/cart-card";
import PlaceOrder from "@/components/place-order";
import Link from "next/link";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="bg-base-200 min-h-screen sm:p-6 p-2 py-6">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-24">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-4">
            {`Looks like you haven't added anything to your cart yet`}
          </p>
          <Link href="/products">
            <button className="btn btn-primary">Start Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((cartItem) => (
            <CartCard
              key={cartItem.id}
              cartItem={cartItem}
              dispatch={dispatch}
            />
          ))}
          <PlaceOrder />
        </>
      )}
    </div>
  );
};

export default Cart;
