// controllers/user/addToCartController.js (ESM)
import addToCartModel from "../../models/cartProduct.js";

const addToCartController = async (req, res) => {
  try {
    const { productId } = req?.body;
    const currentUser = req.userId;

    // Check if product already exists for this user
    const isProductAvailable = await addToCartModel.findOne({
      productId,
      userId: currentUser
    });

    console.log("isProductAvailable:", isProductAvailable);

    if (isProductAvailable) {
      return res.json({
        message: "Already exists in Add to Cart",
        success: false,
        error: true
      });
    }

    const payload = {
      productId,
      quantity: 1,
      userId: currentUser
    };

    const newAddToCart = new addToCartModel(payload);
    const saveProduct = await newAddToCart.save();

    return res.json({
      data: saveProduct,
      message: "Product Added to Cart",
      success: true,
      error: false
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      error: true,
      success: false
    });
  }
};

export default addToCartController;
