import express from "express";
import cors from "cors";
import { createProductRouter } from "./routes/create-product.js";
import { deleteProductRouter } from "./routes/delete-product.js";
import { getAllProductRouter } from "./routes/get-all-products.js";
import { getSelectedProductRouter } from "./routes/get-selected-product.js";

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the products API");
});

app.use(createProductRouter);
app.use(deleteProductRouter);
app.use(getAllProductRouter);
app.use(getSelectedProductRouter);

app.all("*", async (req, res) => {
  res.status(404).send({ message: "Page not found" });
});

export { app };
