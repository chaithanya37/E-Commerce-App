// controllers/user/countAddToCartProduct.js
import addToCartModel from "../../models/cartProduct.js";

const countAddToCartProduct = async (req, res) => {
  try {
    const userId = req.userId;

    const count = await addToCartModel.countDocuments({
      userId: userId
    });

    res.json({
      data: { count },
      message: "ok",
      error: false,
      success: true
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
};

export default countAddToCartProduct;
