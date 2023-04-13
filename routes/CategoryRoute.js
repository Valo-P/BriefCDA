import express from "express";
import {addCategory, getCategories, getCategory, updateCategory, deleteCategory} from "../src/controllers/CategoryController.js";

const router = express.Router();

router.get("/categories", getCategories);
router.get("/category", getCategory);
router.post("/create-category", addCategory);
router.post("/update-category", updateCategory);
router.post("/delete-category", deleteCategory);
export default router;