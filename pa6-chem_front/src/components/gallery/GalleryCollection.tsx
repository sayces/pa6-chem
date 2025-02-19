import React, { useEffect, useState } from "react";
import page_styles from "../pages/pages_styles/pages_styles.module.scss";
import gallery_styles from "./_gallery.module.scss";
import ImageUpload from "../imageUpload/ImageUpload";
import { deleteImage } from "../../../api/apiGallery";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import Post from "./posts/Post";

export default function GalleryCollection() {
  const [images, setImages] = useState([]);
  const [posts, setPosts] = useState([]);
  const user = useAuthStore((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts();
    getAllImages();

    console.log(posts, images);
  }, []);

  const getAllPosts = () => {
    fetch("http://localhost:5002/api/gallery/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Ошибка загрузки постов:", err));
  };

  const getAllImages = () => {
    fetch("http://localhost:5002/api/gallery/images")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Ошибка загрузки галереи:", err));
  };

  const handleDeleteImage = async (id: number) => {
    try {
      await deleteImage(id);
    } catch (error) {
      console.error("Ошибка удаления изображения:", error);
    }
    getAllImages();
  };

  const galleryRedirect = (e: any) => {
    e.preventDefault();
    navigate("/gallery");
  };

  return (
    <div className={gallery_styles.gallery_page}>
      <a className={page_styles.link} onClick={galleryRedirect}>
        <h1>Коллекция галереи</h1>
      </a>

      <div className={gallery_styles.gallery_container}>
        <ImageUpload />
        {posts &&
          posts.map((post: any) => (
            <Post key={post.id}>
              {images[0] &&
                images.reverse().map((image: any) => (
                  <div
                    tabIndex={image.id}
                    key={image.id}
                    className={gallery_styles.image_container}
                  >
                    <img
                      src={`http://localhost:5002${image.url}`}
                      alt={image.url}
                      className={gallery_styles.image}
                    />
                    <div className={gallery_styles.image_overlay}>
                      <button className={gallery_styles.image_like}>
                        <p>like</p>
                      </button>

                      <button
                        disabled={!user}
                        onClick={() => handleDeleteImage(image.id)}
                        className={gallery_styles.image_delete}
                      >
                        <p>rm</p>
                      </button>
                    </div>
                  </div>
                ))}
            </Post>
          ))}
      </div>
    </div>
  );
}
