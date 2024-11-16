import "dotenv/config";
import { Router } from "express";
import { UserAuth } from "../middleware/auth.js";
import { CreateNewOrder } from "../service/create-new-order.js";

const router = Router();

router.post("/place-order", UserAuth, async (req, res, next) => {
  const customerId = req.user?.id;

  console.log(customerId);

  if (!customerId) {
    return res.status(400).send({ message: "Invalid customer ID" });
  }

  try {
    const orderData = await CreateNewOrder(customerId);

    if (!orderData) {
      return res.status(404).send({
        message: "Order creation failed. No items in the cart.",
      });
    }

    return res
      .status(201)
      .json({ data: orderData, message: "Order created successfully." });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).send({
      message: "Server error while placing order",
      error: error.message,
    });
  }
});

export { router as placeOrderRouter };
