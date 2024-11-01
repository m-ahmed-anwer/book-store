import express from "express";
import { UserAuth } from "../middleware/auth.js";
import cart from "../model/cart.js";

const router = express.Router();

router.get("/api/cart", UserAuth, async (req, res, next) => {
  const _id = req.user.id;

  const cartItems = await cart.Cart.find({ customerId: _id });

  if (cartItems) {
    return res.status(200).json(cartItems);
  } else {
    return res.status(404).send({ message: "Cart is empty" });
  }
});

export { router as getCartRouter };
