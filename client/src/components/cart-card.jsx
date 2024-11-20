import {
  addItemToCart,
  decrementItem,
  removeItemFromCart,
} from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import { GoTrash } from "react-icons/go";

const CartCard = ({ cartItem, dispatch }) => {
  const product = cartItem.product;
  const { title, author, price, image } = product;
  const quantity = cartItem.unit;
  const finalPrice = parseFloat(price) * quantity;
  const userId = "672aed44b56ac350a1b8829d";

  const data = {
    _id: product._id,
    title: product.title,
    author: product.author,
    description: product.description,
    image: product.image,
    price: product.price,
  };

  return (
    <div className="mb-6 flex flex-col sm:flex-row justify-between rounded-lg bg-base-100 p-6 shadow-md">
      <Image
        width={150}
        height={200}
        src={image}
        alt={`${title} cover`}
        className="w-full sm:w-32 rounded-lg sm:mr-4  mb-4 sm:mb-0"
      />
      <div className="flex flex-col sm:flex-row sm:justify-between w-full">
        <div className="flex flex-col justify-between mb-4 sm:mb-0">
          <div className="mt-1">
            <h2 className="text-lg font-bold ">{title}</h2>
            <p className="text-sm ">by {author}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{cartItem.description}</p>
        </div>
        <div className="flex flex-col items-center sm:items-end">
          <div className="flex items-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-base-300 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => {
                dispatch(decrementItem({ userId, productId: cartItem._id }));
              }}
            >
              -
            </span>
            <input
              className="h-8 w-8 bg-base-100 text-center text-xs outline-none"
              type="number"
              value={quantity}
              min="1"
              readOnly
            />
            <span
              className="cursor-pointer rounded-r bg-base-300 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => {
                dispatch(addItemToCart({ userId, item: data }));
              }}
            >
              +
            </span>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <span className="text-sm  ">
              ${price} x {quantity}
            </span>

            <p className="text-lg font-bold text-indigo-600">
              ${finalPrice.toFixed(2)}
            </p>

            <GoTrash
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              onClick={() => {
                dispatch(removeItemFromCart({ userId, id: cartItem._id }));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
