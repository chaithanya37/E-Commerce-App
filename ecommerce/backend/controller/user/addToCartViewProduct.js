// controllers/user/addToCartViewProduct.js
import addToCartModel from "../../models/cartProduct.js";

const addToCartViewProduct = async (req, res) => {
  try {
    const currentUser = req.userId;

    const allProduct = await addToCartModel
      .find({
        userId: currentUser,
      })
      .populate("productId");

    res.json({
      data: allProduct,
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

export default addToCartViewProduct;
