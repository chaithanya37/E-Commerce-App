// controllers/product/searchProduct.js
import productModel from "../../models/productModel.js";

const searchProduct = async (req, res) => {
  try {
    const query = req.query.q || "";

    // Create case-insensitive regex for search
    const regex = new RegExp(query, "i");

    const product = await productModel.find({
      $or: [
        { productName: regex },
        { category: regex }
      ]
    });

    res.json({
      data: product,
      message: "Search Product list",
      error: false,
      success: true
    });

  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false
    });
  }
};

export default searchProduct;
