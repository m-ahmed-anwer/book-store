import express from "express";
import product from "../model/product.js";

const router = express.Router();

router.put("/api/product/create", async (req, res, next) => {
  const { title, author, description, image, price } = req.body;

  const data = await product.Product.create({
    title,
    author,
    description,
    image,
    price,
  });

  const productResult = await data.save();

  if (!productResult) {
    return res.status(400).send({ message: "Product not created" });
  }

  res.status(201).send({ productResult, message: "Product created" });
});

export { router as createProductRouter };
