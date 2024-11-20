"use client";
import { clearCart } from "@/store/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const total = useSelector((state) => state.cart.total);

  const handleClick = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const handleConfirm = () => {
    console.log("Order placed!");
    dispatch(clearCart());

    router.push(`/`);
    document.getElementById("my_modal_1").close();
  };

  const handleCancel = () => {
    document.getElementById("my_modal_1").close();
  };

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-lg mx-auto mb-4">
        <h5 className="font-manrope font-semibold text-2xl leading-9 w-full text-center md:text-left md:mb-0 mb-4">
          Subtotal
        </h5>
        <h6 className="font-manrope font-bold text-3xl leading-10 text-indigo-600 text-center md:text-right">
          ${total.toFixed(2)}
        </h6>
      </div>
      <div className="w-full max-w-lg mx-auto">
        <button
          onClick={handleClick}
          className="btn btn-primary w-full text-lg"
        >
          Place Order
        </button>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Your Order</h3>
          <p className="py-4">Are you sure you want to place this order?</p>
          <div className="modal-action">
            <button
              className="btn bg-red-600 hover:bg-red-500 text-white"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button className="btn" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PlaceOrder;
