import express from "express";
import product from "../model/product.js";

const router = express.Router();

router.delete("/api/product/:productId", async (req, res, next) => {
  const { productId } = req.params;

  const productResult = await product.Product.findByIdAndDelete({
    _id: productId,
  });

  if (!productResult) {
    return res.status(404).send({ message: "Product not found" });
  }

  res.status(200).send({ message: "Product deleted successfully" });
});

export { router as deleteProductRouter };
