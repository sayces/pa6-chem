import express from "express";
import { getAllImages, uploadImage, deleteImage, getAllPosts, deletePost, createPost } from "../controllers/galleryController.js";
const router = express.Router();
import upload from "../middlewares/upload.js";

router.get("/gallery/images", getAllImages);
router.post("/gallery/images/upload", upload.array("images"), uploadImage);
router.post("/gallery/posts/create", createPost);
router.delete("/gallery/images/remove/:id", deleteImage);
router.get("/gallery/posts", getAllPosts);
router.delete("/gallery/posts/remove/:id", deletePost);

export default router;