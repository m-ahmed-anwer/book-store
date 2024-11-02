import express from "express";
import product from "../model/product.js";

const router = express.Router();

router.get("/api/products", async (req, res, next) => {
  try {
    const products = await product.Product.find({});

    if (products.length === 0) {
      return res.status(404).send({ message: "No products found" });
    }

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: "Server error while fetching products" });
  }
});

export { router as getAllProductRouter };
