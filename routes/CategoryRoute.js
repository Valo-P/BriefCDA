import express from "express";
import {addCategory, getCategories} from "../src/controllers/CategoryController.js";

const router = express.Router();

router.get("/categories", getCategories);
router.post("/create-category", addCategory);

export default router;