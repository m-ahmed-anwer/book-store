import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: Number },
});

const Product = mongoose.model("product", ProductSchema);

export default { Product };
