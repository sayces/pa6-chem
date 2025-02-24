import React, { useCallback, useEffect, useState } from "react";
import page_styles from "../pages/pages_styles/pages_styles.module.scss";
import gallery_styles from "./_gallery.module.scss";
import ImageUpload from "../imageUpload/ImageUpload";
import {
  deleteImage,
  deletePost,
  getAllImages,
  getAllPosts,
} from "../../../api/apiGallery";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import Post from "./posts/Post";
import Image from "../../images/Image";

export default function GalleryCollection() {
  const [images, setImages] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showBtn, setShowBtn] = useState(false)
  const user = useAuthStore((state) => state.user);

  const navigate = useNavigate();

  const fetchAllPosts = useCallback(async () => {
    await getAllPosts()
      .then((data) => {
        console.log("Полученные посты:", data);
        if (data) {
          setPosts(data);
        }
      })
      .catch((error) =>
        console.error("Ошибка загрузки постов:", error.message)
      );
  }, []);

  const fetchAllImages = useCallback(async () => {
    await getAllImages()
      .then((data: any) => {
        console.log("Полученные фото:", data);
        if (data) {
          setImages(data);
        }
      })
      .catch((error) =>
        console.error("Ошибка загрузки галереи:", error.message)
      );
  }, []);

  useEffect(() => {
    fetchAllPosts();
    fetchAllImages();
  }, [fetchAllPosts, fetchAllImages]);

  const getImagesForPost = (postId: number) => {
    return images.filter((image: any) => image.postId === postId);
  };

  const handleRemovePost = async (id: any) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post: any) => post.id !== id));
    } catch (err) {
      console.log("Ошибка удаления поста", err);
    }
  };

  const handleDeleteImage = async (id: number) => {
    try {
      await deleteImage(id);
      setImages(images.filter((image: any) => image.id !== id));
    } catch (error) {
      console.error("Ошибка удаления изображения:", error);
    }
    getAllImages();
  };

  const galleryRedirect = (e: any) => {
    e.preventDefault();
    navigate("/gallery");
  };

  const handleOnEdit = async () => {
    setShowBtn(!showBtn)
  };

  return (
    <div className={gallery_styles.gallery_page}>
      <a className={page_styles.link} onClick={galleryRedirect}>
        <h1>Коллекция галереи</h1>
      </a>

      <div className={gallery_styles.gallery_container}>
        <ImageUpload posts={posts} />

        {posts.length > 0 ? (
          posts
            .slice()
            .reverse()
            .map((post: any) => {
              const postImages = getImagesForPost(post.id); // Получаем изображения для поста

              return (
                <Post
                  key={post.id}
                  post={post}
                  onDelete={() => handleRemovePost(post.id)}
                  onEdit={() => {
                    handleOnEdit();
                  }}
                >
                  {images.length > 0 ? (
                    postImages.map((image: any) => (
                      <Image
                        key={image.id}
                        onDelete={() => handleDeleteImage(image.id)}
                        image={image}
                        showBtn={showBtn}
                      />
                    ))
                  ) : (
                    <p>Нет изображений</p>
                  )}
                </Post>
              );
            })
        ) : (
          <p>Посты не найдены</p>
        )}
      </div>
    </div>
  );
}
