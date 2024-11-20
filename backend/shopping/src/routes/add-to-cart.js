import express from "express";
import { UserAuth } from "../middleware/auth.js";
import { AddToCart } from "../service/add-to-cart.js";

const router = express.Router();

router.put("/create/:userId", async (req, res, next) => {
  const _id = req.params.userId;
  const { item } = req.body;

  if (!item) {
    return res
      .status(400)
      .send({ message: "Invalid request data", success: false });
  }

  const cartData = await AddToCart(_id, item);

  if (cartData) {
    return res.status(200).json({ data: cartData, success: true });
  } else {
    return res
      .status(404)
      .send({ message: "Error adding items to cart", success: false });
  }
});

export { router as addToCartRouter };
