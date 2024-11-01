import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import { signupRouter } from "./routes/signup.js";
import { loginRouter } from "./routes/login.js";
import { currentUserRouter } from "./routes/current-user.js";
import { errorHandler } from "./middleware/error-handler.js";
import { editRouter } from "./routes/edit-user.js";
import { signoutRouter } from "./routes/signout.js";

const app = express();
app.set("trust proxy", true);
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:8000",
    credentials: true,
  })
);
app.use(
  cookieSession({
    name: "session",
    secret: process.env.JWT_SECRET,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the User API");
});

app.use(currentUserRouter);
app.use(editRouter);
app.use(loginRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.all("*", async (req, res) => {
  res.status(404).send({ message: "Page not found" });
});

app.use(errorHandler);

export { app };
