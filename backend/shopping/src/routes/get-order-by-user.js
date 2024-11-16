import express from "express";
import { UserAuth } from "../middleware/auth.js";
import order from "../model/order.js";

const router = express.Router();

router.get("/get-order", UserAuth, async (req, res, next) => {
  const customerId = req.user.id;

  try {
    const orders = await order.Order.find({ customerId });

    if (orders.length > 0) {
      return res.status(200).send(orders);
    } else {
      return res.status(404).send({ message: "No orders found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Server error while fetching orders" });
  }
});

export { router as getOrderRouter };
