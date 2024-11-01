import { v4 as uuidv4 } from "uuid";
import order from "../model/order.js";
import cart from "../model/cart.js";

const CreateNewOrder = async (_id) => {
  const carts = await cart.Cart.findOne({ customerId: _id });

  if (carts) {
    let amount = 0;
    let cartItems = carts.items;
    if (cartItems.length > 0) {
      cartItems.map((item) => {
        amount += parseInt(item.product.price) * parseInt(item.unit);
      });

      const orderId = uuidv4();
      const orders = new order.Order({
        orderId,
        customerId: _id,
        amount,
        status: "received",
        items: cartItems,
      });

      carts.items = [];

      const orderResult = await orders.save();
      await carts.save();
      return orderResult;
    }
  }
  return false;
};

export { CreateNewOrder };
