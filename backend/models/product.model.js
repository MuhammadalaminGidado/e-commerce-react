import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", ProductSchema);
