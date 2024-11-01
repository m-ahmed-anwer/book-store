import express from "express";
import { UserAuth } from "../middleware/auth.js";
import { AddToCart } from "../service/add-to-cart.js";

const router = express.Router();

router.put("/api/cart", UserAuth, async (req, res, next) => {
  const _id = req.user.id;
  const { item, qty, isRemove } = req.body;

  const cartData = await AddToCart(_id, item, qty, isRemove);

  if (cartData) {
    return res.status(200).json(cartData);
  } else {
    return res.status(404).send({ message: "Error adding items" });
  }
});

export { router as addToCartRouter };
