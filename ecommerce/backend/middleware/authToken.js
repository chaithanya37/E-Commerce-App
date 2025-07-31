// middleware/authToken.js
import jwt from "jsonwebtoken";

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;

    console.log("token", token);
    if (!token) {
      return res.status(200).json({
        message: "Please Login...!",
        error: true,
        success: false
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log("error auth", err);
        return res.status(403).json({
          message: "Invalid or expired token",
          error: true,
          success: false
        });
      }

      console.log("decoded", decoded);
      req.userId = decoded?._id;

      next();
    });

  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      data: [],
      error: true,
      success: false
    });
  }
}

export default authToken;
