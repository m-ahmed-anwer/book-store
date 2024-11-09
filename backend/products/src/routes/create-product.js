import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from "multer";
import express from "express";
import product from "../model/product.js";

const router = express.Router();

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.put("/create", upload.single("image"), async (req, res) => {
  const { title, author, description, price } = req.body;

  const newProduct = await product.Product.create({
    title,
    author,
    description,
    price,
  });

  if (req.file) {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `products/${newProduct._id}/${req.file.originalname}`,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    newProduct.image = `https://${params.Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`;
    await newProduct.save();
  }

  res.status(201).send({
    product: newProduct,
    message: "Product created successfully",
  });
});

export { router as createProductRouter };
