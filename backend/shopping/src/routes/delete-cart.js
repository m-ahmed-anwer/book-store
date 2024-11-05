import express from "express";
import { UserAuth } from "../middleware/auth.js";
import { RemoveFromCart } from "../service/remove-item-cart.js";

const router = express.Router();

router.delete("/:itemId", UserAuth, async (req, res, next) => {
  const customerId = req.user.id;
  const { itemId } = req.params;

  if (!itemId) {
    return res.status(400).json({ message: "Item ID is required" });
  }

  try {
    const response = await RemoveFromCart(customerId, itemId);

    if (response.success) {
      return res.status(200).json({ message: response.message });
    } else {
      return res.status(404).json({ message: response.message });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while removing item from cart", error });
  }
});

export { router as removeFromCartRouter };
