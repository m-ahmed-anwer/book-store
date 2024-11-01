import cart from "../model/cart.js";

const RemoveFromCart = async (customerId, itemId) => {
  try {
    const cartData = await cart.Cart.findOne({ customerId });

    if (!cartData) {
      return { success: false, message: "Cart not found" };
    }

    const itemIndex = cartData.items.findIndex(
      (item) => item._id.toString() === itemId.toString()
    );

    if (itemIndex === -1) {
      return { success: false, message: "Item not found in cart" };
    }

    cartData.items.splice(itemIndex, 1);

    await cartData.save();

    return { success: true, message: "Item removed successfully", cartData };
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return { success: false, message: "Error occurred while removing item" };
  }
};

export { RemoveFromCart };
