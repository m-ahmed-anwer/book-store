import cart from "../model/cart.js";

const AddToCart = async (customerId, item, qty, isRemove) => {
  const cartData = await cart.Cart.findOne({ customerId: customerId });
  const { _id } = item;

  if (cartData) {
    let isExist = false;

    let cartItems = cartData.items;

    if (cartItems.length > 0) {
      cartItems.map((item) => {
        if (item.product._id.toString() === _id.toString()) {
          if (isRemove) {
            cartItems.splice(cartItems.indexOf(item), 1);
          } else {
            item.unit = qty;
          }
          isExist = true;
        }
      });
    }

    if (!isExist && !isRemove) {
      cartItems.push({ product: { ...item }, unit: qty });
    }

    cartData.items = cartItems;

    return await cartData.save();
  } else {
    const cartNewData = await cart.Cart.create({
      customerId: customerId,
      items: [{ product: { ...item }, unit: qty }],
    });
    return await cartNewData.save();
  }
};

export { AddToCart };
