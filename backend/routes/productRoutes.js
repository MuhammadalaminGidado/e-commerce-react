import express from "express";
import {
  getProductById,
  getProducts,
  updateProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProductById);

export default router;
