import express from "express";
import { currentUser, requireAuth } from "../middleware/user.js";

const router = express.Router();

router.get(
  "/api/users/currentuser",
  currentUser,
  requireAuth,
  async (req, res) => {
    try {
      res.status(200).send({ currentUser: req.currentUser || null });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Server error while fetching current user" });
    }
  }
);

export { router as currentUserRouter };
