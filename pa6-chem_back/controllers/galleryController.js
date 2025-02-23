import models from "../models/index.js";
const { Image, Post } = models;
import upload from "../middlewares/upload.js";

const BASE_URL = process.env.BASE_URL;

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: Image, as: "images", }],
    });
    // console.log('posts',posts);
    return await res.status(200).json(posts);
  } catch (error) {
    return await res.status(500).json({ error: error.message });
  }
};

// export const createPost = async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     const post = await Post.create({ title, content });
//     res.status(201).json(post);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

export const getAllImages = async (req, res) => {
  try {
    const images = await Image.findAll({
      include: [{ model: Post, as: "posts" }],
    });
    // console.log('images',images);
    return await res.status(200).json(images);
  } catch (error) {
    return await res.status(500).json({ error: error.message });
  }
};

export const uploadImage = async (req, res) => {
  try {
    const { imageName, size, postId } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "Файл не загружен" });
    }
    if (!postId) {
      return res.status(400).json({ error: "Пост не выбран" });
    }

    const imageUrl = `/uploads/${req.file.filename}`;
    console.log("файл загружен: ", req.file.path);
    const image = await Image.create({
      filename: req.file.originalname,
      url: imageUrl,
      imageName: imageName,
      mimeType: req.file.mimetype,
      size: size,
      postId: Number(postId),
    });

    if (!image) {
      console.log("нет картинки");
    }

    return res.json({ success: true, image });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findByPk(id);
    if (!image) {
      return res.status(404).json({ error: "Изображение не найдено" });
    }
    await image.destroy();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Ошибка при удалении изображения" });
  }
};
