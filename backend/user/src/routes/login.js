import "dotenv/config";
import express from "express";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import User from "../model/user.js";

const router = express.Router();

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors
        .array()
        .map((error) => error.msg)
        .join(", ");
      return res.status(400).json({
        message: errorMessages,
        success: false,
      });
    }

    const { email, password } = req.body;

    try {
      const existingUser = await User.User.findOne({ email });
      if (!existingUser) {
        return res.status(401).json({
          message: "Invalid email or password",
          success: false,
        });
      }

      const passwordsMatch = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!passwordsMatch) {
        return res.status(401).json({
          message: "Invalid password",
          success: false,
        });
      }

      const userJwt = jwt.sign(
        {
          id: existingUser.id,
          email: existingUser.email,
          image: existingUser.image,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      );

      res.cookie("session", userJwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });

      res.status(200).json({
        message: "Login successful",
        success: true,
        user: {
          id: existingUser.id,
          email: existingUser.email,
          name: existingUser.name,
          image: existingUser.image,
        },
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Internal server error", success: false });
    }
  }
);

export { router as loginRouter };
