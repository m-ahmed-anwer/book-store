import express from "express";
import product from "../model/product.js";

const router = express.Router();

router.get("/api/product/:productId", async (req, res, next) => {
  const { productId } = req.params;

  const productResult = await product.Product.findById({ _id: productId });

  if (!productResult) {
    return res.status(404).send({ message: "Product not found" });
  }

  res.status(200).send(productResult);
});

export { router as getSelectedProductRouter };
