import express from "express";
import { UserAuth } from "../middleware/auth.js";
import { RemoveFromCart } from "../service/remove-item-cart.js";

const router = express.Router();

router.delete("/api/cart/:itemId", UserAuth, async (req, res, next) => {
  const customerId = req.user.id;
  const { itemId } = req.params;

  const response = await RemoveFromCart(customerId, itemId);

  if (response.success) {
    return res.status(200).json({ message: response.message });
  } else {
    return res.status(404).json({ message: response.message });
  }
});

export { router as removeFromCartRouter };
