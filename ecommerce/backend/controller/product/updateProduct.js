// controllers/product/updateProductController.js
import uploadProductPermission from "../../helpers/permission.js";
import productModel from "../../models/productModel.js";

async function updateProductController(req, res) {
  try {
    const hasPermission = await uploadProductPermission(req.userId);
    if (!hasPermission) {
      throw new Error("Permission denied");
    }

    const { _id, ...resBody } = req.body;

    const updateProduct = await productModel.findByIdAndUpdate(_id, resBody, {
      new: true, // Return updated document
    });

    res.json({
      message: "Product updated successfully",
      data: updateProduct,
      success: true,
      error: false,
    });

  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

export default updateProductController;
