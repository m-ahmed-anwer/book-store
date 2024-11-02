import express from "express";
import mongoose from "mongoose";
import product from "../model/product.js";

const router = express.Router();

router.delete("/api/product/:productId", async (req, res, next) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).send({ message: "Invalid product ID format" });
  }

  try {
    const productResult = await product.Product.findByIdAndDelete(productId);

    if (!productResult) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Server error while deleting product" });
  }
});

export { router as deleteProductRouter };
