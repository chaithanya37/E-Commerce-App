// controllers/user/updateUser.js
import userModel from "../../models/userModel.js";

async function updateUser(req, res) {
  try {
    const sessionUser = req.userId;

    const { userId, email, name, role } = req.body;

    const payload = {
      ...(email && { email }),
      ...(name && { name }),
      ...(role && { role }),
    };

    const user = await userModel.findById(sessionUser);

    console.log("user.role", user.role);

    const updatedUser = await userModel.findByIdAndUpdate(userId, payload, {
      new: true, // return updated document
    });

    res.json({
      data: updatedUser,
      message: "User Updated",
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

export default updateUser;
