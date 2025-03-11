import React, { useCallback, useEffect, useState } from "react";
import page_styles from "../pages/_pages_styles.module.scss";
import gallery_styles from "./_gallery.module.scss";
import link_styles from "../links/_links.module.scss";
import {
  createPost,
  deleteImage,
  deletePost,
  getAllImages,
  getAllPosts,
  getPostsWithAuthor,
} from "../../../api/apiGallery";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import Post from "./posts/Post";
import Image from "../../images/Image";
import GalleryMainLink from "./GalleryMainLink";

import FilesInputComponent from "../input/FilesInputComponent";

export default function GalleryCollection() {
  const [images, setImages] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [postsWithAuthor, setPostsWithAuthor] = useState([]);

  const navigate = useNavigate();

  const fetchPostsWithAuthor = useCallback(async () => {
    await getPostsWithAuthor()
      .then((data) => {
        console.log("Полученные посты:", data);
        if (data) setPostsWithAuthor(data);
      })
      .catch((error) =>
        console.error("Ошибка загрузки постов 2:", error.message)
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
    // fetchAllPosts();
    fetchAllImages();
    fetchPostsWithAuthor();
  }, []);

  console.log("postsWithAuthor:", postsWithAuthor);

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

  const handleOnEdit = async () => {
    setShowBtn(!showBtn);
  };

  const handleOnAdd = async () => {};

  return (
    <div className={gallery_styles.gallery_page}>
      <div className={gallery_styles.gallery_navigation}>
        <GalleryMainLink />

        <FilesInputComponent />

        <div className={gallery_styles.search}>
          <input
            className={gallery_styles.search_input}
            type="text"
            placeholder="Поиск..."
          ></input>
        </div>
      </div>
      <div className={gallery_styles.gallery_container}>
        {postsWithAuthor.length > 0 ? (
          postsWithAuthor
            .slice()
            .reverse()
            .map((post: any) => {
              const postImages = getImagesForPost(post.id); // Получаем изображения для поста

              return (
                <Post
                  key={post.id}
                  post={post}
                  onDelete={() => handleRemovePost(post.id)}
                  onEdit={handleOnEdit}
                  onAdd={handleOnAdd}
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
