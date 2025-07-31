
import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
}

export default connectDB;
