const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();
app.use(cors());
app.use(express.json());
app.set("trust proxy", true);

app.get("/health", (req, res) => {
  res.status(200).send({ message: "Gateway is healthy" });
});

app.use("/api/users", proxy("http://localhost:8001"));
app.use("/api/shopping", proxy("http://localhost:8010"));
app.use("/api/product", proxy("http://localhost:8002"));

app.all("*", async (req, res) => {
  res.status(404).send({ message: "Page not found" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
