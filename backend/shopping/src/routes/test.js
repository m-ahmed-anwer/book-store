import express from "express";
import { UserAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/testing", UserAuth, async (req, res) => {
  res.status(200).json({ message: "You are authorized!", user: req.user.id });
});

export { router as testRouter };
