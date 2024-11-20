import express from "express";
import { UserAuth } from "../middleware/auth.js";
import { ReduceItemCart } from "../service/reduce-item-cart.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/reduce/:userId", async (req, res, next) => {
  const customerId = req.params.userId;
  const { productId } = req.body;

  if (!customerId || !mongoose.Types.ObjectId.isValid(customerId)) {
    return res.status(400).send({ message: "Invalid user id" });
  }

  if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
    return res
      .status(400)
      .send({ message: "Invalid product id", success: false });
  }

  const cartData = await ReduceItemCart(customerId, productId);

  if (cartData) {
    return res.status(200).json({ data: cartData, success: true });
  } else {
    return res
      .status(404)
      .send({ message: "Error reducing items to cart", success: false });
  }
});

export { router as decreaseItemRouter };
