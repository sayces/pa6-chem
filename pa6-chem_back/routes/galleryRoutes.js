import express from "express";
import { getAllImages, uploadImage } from "../controllers/galleryController.js";
const router = express.Router();
import upload from "../middlewares/upload.js";

router.get("/gallery/images", getAllImages);
router.post("/gallery/upload", upload.single("image"), uploadImage);

export default router;