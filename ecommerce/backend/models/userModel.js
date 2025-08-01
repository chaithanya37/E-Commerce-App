// models/userModel.js (ESM)
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: String,
    profilePic: String,
    role: String
  },
  {
    timestamps: true
  }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
