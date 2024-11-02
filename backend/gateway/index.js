const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();
app.use(cors());
app.use(express.json());
app.set("trust proxy", true);

app.use("/users", proxy("https://user-639859377017.us-central1.run.app"));
app.use("/shopping", proxy("http://localhost:8003"));
app.use("/", proxy("https://products-639859377017.us-central1.run.app"));

app.all("*", async (req, res) => {
  res.status(404).send({ message: "Page not found" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
