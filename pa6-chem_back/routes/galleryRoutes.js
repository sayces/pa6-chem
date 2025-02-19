import express from "express";
import { getAllImages, uploadImage, deleteImage, getAllPosts } from "../controllers/galleryController.js";
const router = express.Router();
import upload from "../middlewares/upload.js";

router.get("/gallery/images", getAllImages);
router.post("/gallery/upload", upload.single("image"), uploadImage);
router.delete("/gallery/remove/:id", deleteImage);
router.get("/gallery/posts", getAllPosts);

export default router;