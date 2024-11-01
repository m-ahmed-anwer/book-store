import "dotenv/config";
import express from "express";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import User from "../model/user.js";

const router = express.Router();

router.post(
  "/api/users/editUser/:id",
  [
    body("name").trim().notEmpty().withMessage("You must supply a name"),
    body("image").trim().notEmpty().withMessage("You must supply a image"),
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

    const { name, image } = req.body;
    const id = req.params.id;

    const existingUser = await User.User.findById(id);

    if (!existingUser) {
      return res.status(400).json({
        errors: [{ message: "User not found" }],
      });
    }

    existingUser.name = name;
    existingUser.image = image;

    await existingUser.save();

    res.status(201).send(existingUser);
  }
);

export { router as editRouter };
