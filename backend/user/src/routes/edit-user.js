import "dotenv/config";
import express from "express";
import { body, validationResult } from "express-validator";
import User from "../model/user.js";

const router = express.Router();

router.post(
  "/editUser/:id",
  [
    body("name").trim().notEmpty().withMessage("You must supply a name"),
    body("image").trim().notEmpty().withMessage("You must supply an image"),
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

    try {
      const existingUser = await User.User.findById(id);

      if (!existingUser) {
        return res.status(404).json({
          errors: [{ message: "User not found" }],
        });
      }

      existingUser.name = name;
      existingUser.image = image;

      await existingUser.save();

      return res.status(200).send(existingUser);
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Server error while updating user" });
    }
  }
);

export { router as editRouter };
