import "dotenv/config";
import mongoose from "mongoose";
import { app } from "./app.js";

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
  app.listen(8010, () => {
    console.log("Listening on port 8010!");
  });
};

start();
