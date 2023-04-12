import express from "express";
import {getCategories} from "../src/controllers/CategoryController.js";

const router = express.Router();

router.get("/categories", getCategories);

export default router;