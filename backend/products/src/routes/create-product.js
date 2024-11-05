import AWS from "aws-sdk";
import multer from "multer";
import express from "express";
import product from "../model/product.js";

const router = express.Router();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();
const upload = multer({
  storage: multer.memoryStorage(),
});

router.put("/create", upload.single("image"), async (req, res) => {
  const { title, author, description, price } = req.body;

  try {
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

      try {
        const s3Upload = await s3.upload(params).promise();
        newProduct.image = s3Upload.Location;
        await newProduct.save();
      } catch (s3Error) {
        return res
          .status(500)
          .send({ message: "Failed to upload image", s3Error });
      }
    }

    res
      .status(201)
      .send({ product: newProduct, message: "Product created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Product creation failed", error });
  }
});

export { router as createProductRouter };
