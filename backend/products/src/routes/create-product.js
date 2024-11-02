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

router.put("/api/product/create", upload.single("image"), async (req, res) => {
  const { title, author, description, price } = req.body;

  try {
    const data = await product.Product.create({
      title,
      author,
      description,
      price,
    });
    const productResult = await data.save();
    productResult._id = productResult._id.toString();

    if (req.file) {
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `products/${productResult._id}/${req.file.originalname}`,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      };

      const s3Upload = await s3.upload(params).promise();
      productResult.image = s3Upload.Location;
      await productResult.save();
    }

    res.status(201).send({ productResult, message: "Product created" });
  } catch (error) {
    res.status(500).send({ message: "Product not created", error });
  }
});

export { router as createProductRouter };
