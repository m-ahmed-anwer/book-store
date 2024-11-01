import express from "express";
import product from "../model/product.js";

const router = express.Router();

router.get("/api/products", async (req, res, next) => {
  const products = await product.Product.find({});

  if (!products) {
    return res.status(404).send({ message: "Products not found" });
  }
  res.status(200).send(products);
});

export { router as getAllProductRouter };
