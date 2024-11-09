import express from "express";
import mongoose from "mongoose";
import product from "../model/product.js";

const router = express.Router();

router.get("/get/:productId", async (req, res, next) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).send({ message: "Invalid product ID format" });
  }

  const productResult = await product.Product.findById(productId);

  if (!productResult) {
    return res.status(404).send({ message: "Product not found" });
  }

  res.status(200).send(productResult);
});

export { router as getSelectedProductRouter };
