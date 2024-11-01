import express from "express";
import { UserAuth } from "../middleware/auth.js";

import order from "../model/order.js";

const router = express.Router();

router.get("/api/order", UserAuth, async (req, res, next) => {
  const _id = req.user.id;

  const data = await order.Order.find({ customerId: _id });

  if (data) {
    return res.status(200).send(data);
  } else {
    return res.status(404).send({ message: "No orders found" });
  }
});

export { router as getOrderRouter };
