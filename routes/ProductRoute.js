import express from "express";
import {
    addProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct
} from "../src/controllers/ProductController.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/product", getProduct);
router.post("/create-product", addProduct);
router.post("/update-product", updateProduct);
router.post("/delete-product", deleteProduct);
export default router;