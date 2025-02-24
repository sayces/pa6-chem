import models from "../models/index.js";
const { Image, Post } = models;
import upload from "../middlewares/upload.js";

const BASE_URL = process.env.BASE_URL;

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: Image, as: "images" }],
    });
    // console.log('posts',posts);
    return await res.status(200).json(posts);
  } catch (error) {
    return await res.status(500).json({ error: error.message });
  }
};



export const createPost = async (req, res) => {
  try {
    const { authorId, postName, collectionId } = req.body;
    if(!authorId) console.log('автор не указан')
      console.log(req.body)
    const post = await Post.create({ authorId, postName, collectionId });
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

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
    const { imageName, postId, authorId, postName } = req.body;
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "Файл не загружен" });
    }
    if (!postId) {
      return res.status(400).json({ error: "Пост не выбран" });
    }

    console.log("файл загружен: ", req.files);

    const uploadedFiles = req.files.map((file) => ({
      filename: file.originalname,
      url: `/uploads/${file.filename}`,
      imageName: imageName,
      postName: postName,
      mimeType: file.mimetype,
      size: file.size,
      postId: Number(postId),
      authorId: Number(authorId),
    }));

    const image = await Promise.all(
      uploadedFiles.map((file) =>
        Image.create({
          filename: file.filename,
          url: file.url,
          imageName: file.imageName,
          mimeType: file.mimeType,
          size: file.size,
          postId: file.postId,
        })
      )
    );

    let post;
    if (postId) {
      post = await Post.create({
        postName: postName,
        collectionId: 1,
        authorId: Number(authorId),
      });
    }

    return res.json({ success: true, image: image, post: post });
  } catch (error) {
    res.status(500).json({ error: "Ошибка сервера", details: error.message });
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

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ error: "Пост не найден" });
    }
    await post.destroy();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Ошибка при удалении поста" });
  }
};
