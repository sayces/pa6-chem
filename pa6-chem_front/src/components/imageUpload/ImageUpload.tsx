import React, { useEffect } from "react";
import { useState } from "react";
import gallery_styles from "../gallery/_gallery.module.scss";
import { useAuthStore } from "../../store/authStore";
import { redirect } from "react-router-dom";
import { uploadImage } from "../../../api/apiGallery";

const ImageUpload =  ()  => {
  const user = useAuthStore((state) => state.user);
  const [image, setImage] = useState<null | File>(null);
  const [message, setMessage] = useState("");
  const [imageName, setImageName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!image) {
      return setMessage("Выберите файл");
    }

    const formData = new FormData();
    image && formData.append("image", image);
    formData.append("imageName", imageName);
    formData.append("size", (image.size / 1024).toFixed(2));
    formData.append("postId", String(1));

    console.log("formdata", formData);

    uploadImage(formData);
  }

  return (
    <div
      className={gallery_styles.image_upload}
    >
      <input
        className={gallery_styles.file_input}
        id="file_input"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <input
        type="text"
        className={gallery_styles.input_image_name}
        onChange={(e) => setImageName(e.target.value)}
        placeholder="imageName"
      />
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
      <button type="submit" onClick={handleUpload}>
        Отправить
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ImageUpload;