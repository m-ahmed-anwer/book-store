import "dotenv/config";
import express from "express";
import { UserAuth } from "../middleware/auth.js";
import { PubSub } from "@google-cloud/pubsub";
import { CreateNewOrder } from "../service/create-new-order.js";
import { GetOrderPayload } from "../service/get-order-payload.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const keyFilePath = path.join(__dirname, "node-js-pubsub.json");

const pubSubClient = new PubSub({
  keyFilename: keyFilePath,
});

const publishMessage = async (topicName, payload) => {
  const dataBuffer = Buffer.from(JSON.stringify(payload));

  try {
    const messageId = await pubSubClient
      .topic(topicName)
      .publishMessage({ data: dataBuffer });
    return messageId;
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    return null;
  }
};

router.post("/api/order", UserAuth, async (req, res, next) => {
  const _id = req.user.id;

  const data = await CreateNewOrder(_id);

  if (!data) {
    return res
      .status(404)
      .send({ message: "Order creation failed, No items on Cart" });
  }

  const payload = await GetOrderPayload(_id, data, "CREATE_ORDER");

  if (!payload) {
    return res.status(404).send({ message: "Order payload creation failed" });
  }

  const message = await publishMessage(
    process.env.GOOGLE_CLOUD_PUBSUB_TOPIC_NAME,
    payload
  );

  return res.status(200).json({ data, message });
});

export { router as placeOrderRouter };
