import express from "express";
import { body, validationResult } from "express-validator";
import User from "../model/user.js";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("name").trim().notEmpty().withMessage("You must supply a name"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors
          .array()
          .map((err) => ({ message: err.msg, field: err.param })),
      });
    }

    const { name, email, password } = req.body;

    try {
      const existingUser = await User.User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          errors: [{ message: "Email in use" }],
        });
      }

      const user = new User.User({
        name,
        email,
        password,
        image,
      });

      await user.save();

      res.status(201).send(user);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    
    }
  }
);

export { router as signupRouter };
