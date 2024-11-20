import cart from "../model/cart.js";

const ReduceItemCart = async (customerId, productId) => {
  const cartData = await cart.Cart.findOne({ customerId: customerId });

  if (cartData) {
    let itemFound = false;
    cartData.items = cartData.items
      .map((cartItem) => {
        if (cartItem._id.toString() === productId.toString()) {
          itemFound = true;
          if (cartItem.unit > 1) {
            cartItem.unit -= 1;
          } else {
            return null;
          }
        }
        return cartItem;
      })
      .filter((item) => item !== null);

    if (itemFound) {
      await cartData.save();
      return cartData;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export { ReduceItemCart };
