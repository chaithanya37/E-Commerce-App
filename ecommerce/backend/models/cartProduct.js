// models/cartProduct.js (ESM)
import mongoose from "mongoose";

const addToCartSchema = new mongoose.Schema(
  {
    productId: {
      ref: "product",
      type: String,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const addToCartModel = mongoose.model("addToCart", addToCartSchema);

export default addToCartModel;
