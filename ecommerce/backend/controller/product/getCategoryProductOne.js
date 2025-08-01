// controllers/product/getCategoryProduct.js
import productModel from "../../models/productModel.js";

const getCategoryProduct = async (req, res) => {
  try {
    const productCategory = await productModel.distinct("category");

    console.log("category", productCategory);

    // Array to store one product from each category
    const productByCategory = [];

    for (const category of productCategory) {
      const product = await productModel.findOne({ category });

      if (product) {
        productByCategory.push(product);
      }
    }

    res.json({
      message: "category product",
      data: productByCategory,
      success: true,
      error: false
    });

  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false
    });
  }
};

export default getCategoryProduct;
