import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  customerId: { type: String, require: true, unique: true },
  items: [
    {
      product: {
        _id: { type: String, require: true },
        title: { type: String },
        author: { type: String },
        description: { type: String },
        image: { type: String },
        price: { type: Number },
      },
      unit: { type: Number, require: true },
    },
  ],
});

const Cart = mongoose.model("cart", CartSchema);

export default { Cart };
