const AddToCart = require("../Model/AddtoCart.model");

async function addToCartApi(req, res) {
  try {
    const { userId, productId, quantity } = req.body;

    const cartItem = await AddToCart.create({
      user: userId,
      product: productId,
      quantity,
    });

    const result = await AddToCart.findById(cartItem._id)
      .populate("user")
      .populate("product");

    res.status(201).json(result);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {addToCartApi};