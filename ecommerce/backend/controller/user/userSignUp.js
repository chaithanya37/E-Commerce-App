// controllers/user/userSignUp.js
import userModel from '../../models/userModel.js';
import bcrypt from 'bcryptjs';

async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;

    const existingUser = await userModel.findOne({ email });
    console.log("user", existingUser);

    if (existingUser) {
      throw new Error("User already exists.");
    }

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    if (!name) {
      throw new Error("Please provide name");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("Something went wrong while hashing password");
    }

    const payload = {
      ...req.body,
      role: "GENERAL",
      password: hashPassword
    };

    const newUser = new userModel(payload);
    const savedUser = await newUser.save();

    res.status(201).json({
      data: savedUser,
      success: true,
      error: false,
      message: "User created successfully!"
    });

  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

export default userSignUpController;
