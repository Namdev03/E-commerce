const { Schema, model } = require("mongoose");

const addToCartSchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

module.exports = model("AddToCart", addToCartSchema);