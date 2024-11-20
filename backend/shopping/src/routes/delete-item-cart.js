import express from "express";
import { UserAuth } from "../middleware/auth.js";
import { RemoveFromCart } from "../service/remove-item-cart.js";
import mongoose from "mongoose";

const router = express.Router();

router.delete("/delete/:userId/:itemId", async (req, res, next) => {
  const { userId } = req.params;
  const { itemId } = req.params;

  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).send({ message: "Invalid user id", success: false });
  }

  if (!itemId || !mongoose.Types.ObjectId.isValid(itemId)) {
    return res.status(400).json({ message: "Invalid item id", success: false });
  }

  const response = await RemoveFromCart(userId, itemId);

  if (response.success) {
    return res.status(200).json({
      message: response.message,
      success: true,
      data: response.cartData,
    });
  } else {
    return res.status(404).json({ message: response.message, success: false });
  }
});

export { router as removeFromCartRouter };
