import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    if (!file.originalname) {
      return cb(new Error("Ошибка загрузки файла: оригинальное имя не найдено"), false);
    };
    cb(null, Date.now() + path.extname(file.originalname));
  }
  
});

export const upload = multer({ storage });

export default upload;