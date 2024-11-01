import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/error-handler.js";
import { addToCartRouter } from "./routes/add-to-cart.js";
import { removeFromCartRouter } from "./routes/delete-cart.js";
import { getCartRouter } from "./routes/get-cart.js";
import { getOrderRouter } from "./routes/get-orders.js";
import { testRouter } from "./routes/test.js";
import { placeOrderRouter } from "./routes/place-order.js";

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    secret: process.env.JWT_SECRET,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the shopping API");
});

app.use(addToCartRouter);
app.use(removeFromCartRouter);
app.use(getCartRouter);
app.use(getOrderRouter);
app.use(placeOrderRouter);
app.use(testRouter);

app.all("*", async (req, res) => {
  res.status(404).send({ message: "Page not found" });
});

app.use(errorHandler);

export { app };
