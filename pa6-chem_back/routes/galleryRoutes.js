import express from "express";
import { getAllImages, uploadImage, deleteImage, getAllPosts, deletePost, createPost, postUpdate, getPostById, getPostsWithAuthor} from "../controllers/galleryController.js";
const router = express.Router();
import upload from "../middlewares/upload.js";

router.get("/gallery/images", getAllImages);
router.post("/gallery/images/upload", upload.array("files"), uploadImage);
router.post("/gallery/posts/create", createPost);
router.delete("/gallery/images/remove/:id", deleteImage);
router.get("/gallery/posts", getAllPosts);
router.delete("/gallery/posts/remove/:id", deletePost);
router.put("/gallery/posts/update/:id", postUpdate)
router.get("/gallery/posts-by-id/:id", getPostById)
router.get("/gallery/posts-author", getPostsWithAuthor)

export default router;