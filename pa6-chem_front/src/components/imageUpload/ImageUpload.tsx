import React, { useEffect } from "react";
import { useState } from "react";
import gallery_styles from "../gallery/_gallery.module.scss";
import { useAuthStore } from "../../store/authStore";
import { redirect } from "react-router-dom";
import { eventNames } from "process";

const ImageUpload: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [imageName, setImageName] = useState('');

  

  useEffect(() => {
    // imageUploadSubmit();
  }, []);

  const imageUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    redirect("/gallery");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setMessage("Выберите файл");
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append('imageName', imageName);
    formData.append('size', (image.size / 1024).toFixed(2));
    
    console.log('formdata', formData)

    try {
      const response = await fetch("http://localhost:5002/api/gallery/upload", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error("Ошибка загрузки файла");
      }
      await response.json();

      setMessage("Изображение успешно загружено!");
    } catch (error) {
      console.error(error);
      setMessage(`Ошибка загрузки.`);
    }
  };

  return (
    <form id="Form" onSubmit={imageUploadSubmit} className={gallery_styles.image_upload}>
      <input
        className={gallery_styles.file_input}
        id="file_input"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <input type="text" className={gallery_styles.input_image_name} onChange={(e) => setImageName(e.target.value)} placeholder="imageName" />
      <label
        htmlFor="file_input"
        className={gallery_styles.file_label}
        style={
          image
            ? { backgroundColor: "#7bb3319a" }
            : { backgroundColor: "transparent" }
        }
      >
        <p className={gallery_styles.file_label_text}>
          {image ? "Отправьте файл" : "Загрузить изображение"}
        </p>
      </label>
      <button type="submit" onClick={handleUpload}>Отправить</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ImageUpload;
