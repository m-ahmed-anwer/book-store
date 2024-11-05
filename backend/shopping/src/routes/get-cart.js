import express from "express";
import { UserAuth } from "../middleware/auth.js";
import cart from "../model/cart.js";

const router = express.Router();

router.get("/", UserAuth, async (req, res, next) => {
  const customerId = req.user.id;

  try {
    const cartItems = await cart.Cart.find({ customerId });

    if (cartItems.length > 0) {
      return res.status(200).json(cartItems);
    } else {
      return res.status(404).send({ message: "Cart is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: "Server error while fetching cart items" });
  }
});

export { router as getCartRouter };
