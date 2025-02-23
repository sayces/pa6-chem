import React, { useCallback, useEffect, useState } from "react";
import page_styles from "../pages/pages_styles/pages_styles.module.scss";
import gallery_styles from "./_gallery.module.scss";
import ImageUpload from "../imageUpload/ImageUpload";
import {
  deleteImage,
  getAllImages,
  getAllPosts,
} from "../../../api/apiGallery";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import Post from "./posts/Post";
import Image from "../../images/Image";

export default function GalleryCollection() {
  const [_images, _setImages] = useState([]);
  const [_posts, _setPosts] = useState([]);
  const user = useAuthStore((state) => state.user);

  const navigate = useNavigate();

  const fetchAllPosts = useCallback(async () => {
    await getAllPosts()
      .then((data) => {
        console.log("Полученные посты:", data);
        if (data) {
          _setPosts(data);
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
          _setImages(data);
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

  // const getImagesForPost = (postId: number) => {
  //   return _images.filter((image: any) => image.postId === postId);
  // };

  const handleDeleteImage = async (id: number) => {
    try {
      await deleteImage(id);
      _setImages(_images.filter((image: any) => image.id !== id));
    } catch (error) {
      console.error("Ошибка удаления изображения:", error);
    }
    getAllImages();
  };

  const galleryRedirect = (e: any) => {
    e.preventDefault();
    navigate("/gallery");
  };

  // _posts.forEach((post: any) => {
  //   const postImages = post.images.filter(
  //     (image: any) => image.postId === post.id
  //   );
  //   console.log(postImages);
  // });

  return (
    <div className={gallery_styles.gallery_page}>
      <a className={page_styles.link} onClick={galleryRedirect}>
        <h1>Коллекция галереи</h1>
      </a>

      <div className={gallery_styles.gallery_container}>
        <ImageUpload />

        {_posts.length > 0 ? (
          _posts
            .slice()
            .reverse()
            .map((post: any) => {
              // const postImages = getImagesForPost(post.id); // Получаем изображения для поста

              return (
                <Post key={post.id} post={post}> 
                  
                  {_images.length > 0 ? (
                    _images.map((image: any) => (
                      <Image key={image.id} onClick={() => handleDeleteImage(image.id)} image={image}/>
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
