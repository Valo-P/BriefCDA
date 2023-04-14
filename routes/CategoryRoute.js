import express from "express";
import {addCategory, getCategories, getCategory, updateCategory, deleteCategory} from "../src/controllers/CategoryController.js";

const router = express.Router();

router.get("/categories", getCategories);
router.get("/category/:id", getCategory);
router.post("/category/create", addCategory);
router.post("/category/:id/update", updateCategory);
router.get("/category/:id/delete", deleteCategory);
export default router;