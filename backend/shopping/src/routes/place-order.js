import "dotenv/config";
import { UserAuth } from "../middleware/auth.js";

import { CreateNewOrder } from "../service/create-new-order.js";

router.post("/order", UserAuth, async (req, res, next) => {
  const customerId = req.user.id;

  try {
    const data = await CreateNewOrder(customerId);

    if (!data) {
      return res
        .status(404)
        .send({ message: "Order creation failed, no items in cart" });
    }

    return res.status(201).json({ data });
  } catch (error) {
    return res.status(500).send({
      message: "Server error while placing order",
      error: error.message,
    });
  }
});

export { router as placeOrderRouter };
