import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    orderId: { type: String },
    customerId: { type: String },
    amount: { type: Number },
    status: { type: String },
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
  },
  {
    collection: "order",
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

const Order = mongoose.model("order", OrderSchema);

export default { Order };
