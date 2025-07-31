// controllers/user/allUsers.js
import userModel from "../../models/userModel.js";

async function allUsers(req, res) {
  try {
    console.log("userid all Users", req.userId);

    const allUsersList = await userModel.find();

    res.json({
      message: "All Users",
      data: allUsersList,
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
}

export default allUsers;
