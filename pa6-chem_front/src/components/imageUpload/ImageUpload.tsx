import React from "react";
import { useState } from "react";
import gallery_styles from "../gallery/_gallery.module.scss";
import { useAuthStore } from "../../store/authStore";


const ImageUpload: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setMessage("Выберите файл");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5002/api/gallery/upload", {
        method: "POST",
        body: formData,
      });
      console.log(response, formData);
      if (!response.ok) {
        throw new Error("Ошибка загрузки файла");
      }
      await response.json();
      
      setMessage("Изображение успешно загружено!");
    } catch (error) {
      console.error("Ошибка:", error);
      setMessage(`Ошибка загрузки файла.`);
    }
  };

  return (
    <div className={gallery_styles.image_upload}>
      <input
        className={gallery_styles.file_input}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Загрузить</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ImageUpload;
