import React, { useEffect } from "react";
import { useState } from "react";
import gallery_styles from "../gallery/_gallery.module.scss";
import { useAuthStore } from "../../store/authStore";
import { redirect } from "react-router-dom";
import { getAllPosts, uploadImage, createPost } from "../../../api/apiGallery";

const ImageUpload = ({ posts }: { posts: any }) => {
  const user = useAuthStore((state) => state.user);
  const [images, setImages] = useState<File[]>([]);
  const [message, setMessage] = useState("");
  const [imageName, setImageName] = useState("");
  const [postName, setPostName] = useState("");
  // const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files)
      setImages(selectedFiles);
      console.log("Выбранные файлы:", selectedFiles);
    }
  };

  const userPosts = posts.filter((post: any) => post.authorId === user.id);


  const handleCreatePostAndUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!images || images.length === 0) {
      return setMessage("Выберите файлы");
    }

    let finalPostId = postId;
    const postData = { postName, authorId: user?.id, collectionId: 1 };

    if (!postId && postName) {
      try {
        // Создаем новый пост и получаем его ID
        const newPost = await createPost(postData);
        finalPostId = newPost.id;
        setPostId(finalPostId);
      } catch (error) {
        return setMessage("Ошибка создания поста");
      }
    }
  
    if (!finalPostId) {
      return setMessage("Выберите пост или введите его название");
    }

    // if (!postName || !postId) {
    //   let lastPostId = posts.at(-1)
    //   console.log(lastPostId.id)
    //   setPostId(lastPostId.id)
    //   setPostName(postId)
    // }
    
      
      const formData = new FormData();

      images.forEach((image, index) => {    
        formData.append("images", image);
        formData.append(`imageSize_${index}`, (image.size / 1024).toFixed(2));
      });
    
      formData.append("authorId", String(user.id));
      formData.append("imageName", imageName);
      formData.append("postId", String(finalPostId));
      formData.append("postName", postName);

      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      uploadImage(formData);
    };

    
  
    // useEffect(() => {
    //   handleUpload;
  
    // },[postId]);

  return (
    <fieldset className={gallery_styles.image_upload}>
      <legend className={gallery_styles.image_upload_title}>
        Загрузка изображений
      </legend>
      <input
        className={gallery_styles.file_input}
        id="file_input"
        multiple
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      <select
        className={gallery_styles.post_select}
        onChange={(e) => setPostId(e.target.value)}
      >
        <option value=''>Выберите ваш пост</option>
        {userPosts.map((post: any) => (
          <option key={post.id} value={post.id}>
            {post.postName}
          </option>
        ))}
      </select>

      <input
        type="text"
        className={gallery_styles.input_post_name}
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
        placeholder="Название поста (необяз.)"
      />

      <label
        htmlFor="file_input"
        className={gallery_styles.file_label}
        style={
          images
            ? { backgroundColor: "#7bb3319a" }
            : { backgroundColor: "transparent" }
        }
      >
        <p className={gallery_styles.file_label_text}>
          {images ? "Отправьте файл" : "Загрузить изображение"}
        </p>
      </label>
      <input
        type="text"
        className={gallery_styles.input_image_name}
        onChange={(e) => setImageName(e.target.value)}
        placeholder="Название изображения (необяз.)"
      />
      <button type="submit" onClick={handleCreatePostAndUpload}>
        Отправить
      </button>
      {message && <p>{message}</p>}
    </fieldset>
  );
};

export default ImageUpload;

