import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  try {
    if (!req.cookies || !req.cookies.session) {
      return res.status(401).json({ message: "User not signed in" });
    }

    res.clearCookie("session", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res.status(200).json({ message: "User successfully signed out" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

export { router as signoutRouter };
