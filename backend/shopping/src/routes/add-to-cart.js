import express from "express";
import { UserAuth } from "../middleware/auth.js";
import { AddToCart } from "../service/add-to-cart.js";

const router = express.Router();

router.put("/", UserAuth, async (req, res, next) => {
  const _id = req.user.id;
  const { item, qty, isRemove } = req.body;

  // Validate input data
  if (!item || typeof qty !== "number" || typeof isRemove !== "boolean") {
    return res.status(400).send({ message: "Invalid request data" });
  }

  try {
    const cartData = await AddToCart(_id, item, qty, isRemove);

    if (cartData) {
      return res.status(200).json(cartData);
    } else {
      return res.status(404).send({ message: "Error adding items to cart" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Server error while updating cart", error });
  }
});

export { router as addToCartRouter };
