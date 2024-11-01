import "dotenv/config";
import jwt from "jsonwebtoken";

const currentUser = (req, res, next) => {
  const token = req.cookies.session;

  console.log(token);
  if (!token) {
    return next();
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET must be defined");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.currentUser = payload;
  } catch (error) {}

  next();
};

const requireAuth = (req, res, next) => {
  if (!req.currentUser) {
    throw new Error("Not authorized");
  }
  next();
};

export { currentUser, requireAuth };
