import express from "express";
import product from "../model/product.js";

const router = express.Router();

router.get("/get", async (req, res, next) => {
  const products = await product.Product.find({});

  if (products.length === 0) {
    return res.status(404).send({ message: "No products found" });
  }

  res.status(200).send(products);
});

export { router as getAllProductRouter };
