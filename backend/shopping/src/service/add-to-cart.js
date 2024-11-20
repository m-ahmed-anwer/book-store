import cart from "../model/cart.js";

const AddToCart = async (customerId, item) => {
  const cartData = await cart.Cart.findOne({ customerId: customerId });
  const { _id } = item;

  if (cartData) {
    let isExist = false;
    let cartItems = cartData.items;

    if (cartItems.length > 0) {
      cartItems = cartItems.map((cartItem) => {
        if (cartItem.product._id.toString() === _id.toString()) {
          cartItem.unit += 1; // Increment the unit by 1
          isExist = true;
        }
        return cartItem;
      });
    }

    if (!isExist) {
      cartItems.push({ product: { ...item }, unit: 1 });
    }
    cartData.items = cartItems;
    return await cartData.save();
  } else {
    const cartNewData = await cart.Cart.create({
      customerId: customerId,
      items: [{ product: { ...item }, unit: 1 }],
    });
    return await cartNewData.save();
  }
};

export { AddToCart };
