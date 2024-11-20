import express from "express";
import { UserAuth } from "../middleware/auth.js";
import cart from "../model/cart.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/get-cart/:userId", async (req, res, next) => {
  const customerId = req.params.userId;

  if (!customerId || !mongoose.Types.ObjectId.isValid(customerId)) {
    return res.status(400).send({ message: "Invalid user id" });
  }

  try {
    const cartItems = await cart.Cart.findOne({ customerId });

    if (cartItems) {
      return res.status(200).json(cartItems);
    } else {
      return res.status(404).send({ message: "Cart is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: "Server error while fetching cart items" });
  }
});

export { router as getCartRouter };
