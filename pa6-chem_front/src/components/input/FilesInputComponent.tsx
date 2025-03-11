import React, { useState } from "react";
import input_styles from "./_input.module.scss";
import add_image from "./assets/image.png";
import { create } from "lodash";
import { createPost, uploadImage } from "../../../api/apiGallery";
import { useAuthStore } from "../../store/authStore";

export default function FilesInputComponent() {
  const [files, setFiles] = useState<File[]>([]);
  const [preview, setPreview] = useState<string[]>([]);
  const [isDescriptionFocused, setIsDescriptionFocused] =
    useState<boolean>(false);

  const user = useAuthStore((state) => state.user);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles) {
      setFiles(selectedFiles);
      setPreview(selectedFiles.map((file) => URL.createObjectURL(file))); // Создаём URL для предпросмотра
    }
  };

  const handleAddPost = async () => {
    try {
      let postData = {
        authorId: user.id,
        collectionId: 1,
        postDescription: "",
      };

      const response = await createPost(postData);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddImages = async () => {
    try {
      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
      });

      // formData.append("postId", user.id.toString());
      formData.append("postDescription", "");

      const response = await uploadImage(formData);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={input_styles.image_upload_container}>
      <div className={input_styles.image_upload_input_container}>
        <input
          className={input_styles.image_upload_input}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          id="fileInput"
        />

        <label htmlFor="fileInput" className={input_styles.image_upload_label}>
          <img src={add_image} alt="add_image" />
        </label>

        {preview.length > 0 && (
          <div className={input_styles.image_upload_preview_container}>
            {preview.slice(0, 3).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`preview-${index}`}
                className={input_styles.image_upload_preview}
              />
            ))}
            {preview.length > 3 && <p>и еще {preview.length - 3} фото</p>}
          </div>
        )}
      </div>

      <input
        type="text"
        onFocus={() => setIsDescriptionFocused(true)}
        onBlur={() => setIsDescriptionFocused(false)}
        className={input_styles.image_upload_post_description}
        placeholder="Описание нового поста..."
      ></input>
      {preview.length > 0 && (
        <button
          className={input_styles.image_upload_submit_button}
          onClick={handleAddPost}
        >
          Создать пост
        </button>
      )}
    </div>
  );
}
