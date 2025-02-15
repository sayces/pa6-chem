import models from "../models/index.js";
const { Gallery } = models;
import upload from "../middlewares/upload.js";

const BASE_URL = process.env.BASE_URL;

export const getAllImages = async (req, res) => {
  try {
    const images = await Gallery.findAll();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Файл не загружен" });
    }
    const imageUrl = `/uploads/${req.file.filename}`;
    console.log('файл загружен: ',req.file.path);
    const image = await Gallery.create({
      
      filename: req.file.filename,
      url: imageUrl,
    });

    res.json({ success: true, image});
  } catch (error) {
    res.status(500).json({ error: "Ошибка при загрузке изображения" });
  }
};
