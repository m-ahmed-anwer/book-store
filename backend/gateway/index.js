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
app.use("/api/products", proxy("http://localhost:8002"));

app.all("*", async (req, res) => {
  res.status(404).send({ message: "Page not found" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// const express = require("express");
// const cors = require("cors");
// const proxy = require("express-http-proxy");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.set("trust proxy", true);

// app.use(
//   "/users",
//   proxy("https://user-639859377017.us-central1.run.app", {
//     proxyErrorHandler: (err, res, next) => {
//       console.error("Error with /users proxy:", err);
//       res.status(500).send({ message: "Proxy error with /users service" });
//     },
//   })
// );

// app.use(
//   "/shopping",
//   proxy("https://shopping-639859377017.us-central1.run.app", {
//     proxyErrorHandler: (err, res, next) => {
//       console.error("Error with /shopping proxy:", err);
//       res.status(500).send({ message: "Proxy error with /shopping service" });
//     },
//   })
// );

// app.use(
//   "/",
//   proxy("https://products-639859377017.us-central1.run.app", {
//     proxyErrorHandler: (err, res, next) => {
//       console.error("Error with products proxy:", err);
//       res.status(500).send({ message: "Proxy error with /products service" });
//     },
//   })
// );

// app.all("*", async (req, res) => {
//   res.status(404).send({ message: "Page not found" });
// });

// app.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });
