import React, { useCallback, useEffect, useState } from "react";
import { useAuthStore } from "../../../store/authStore";
import gallery_styles from "../_gallery.module.scss";
// import { deletePost, getAllPosts } from "../../../../api/apiGallery";
import { getUserById } from "../../../../api/apiUser";
import { getPostById, getPostsWithAuthor } from "../../../../api/apiGallery";

const Post = ({
  children,
  post,
  onDelete,
  onEdit,
  onAdd,
}: {
  children: React.ReactNode;
  post: any;
  onDelete: any;
  onAdd: any;
  onEdit: any;
}) => {
  const [isEditable, setIsEditable] = useState<string | boolean>(false);
  const [userWithPosts, setUserWithPosts] = useState();
  const [postWithAuthor, setPostWithAuthor] = useState();
  const [newPostDescription, setNewPostDescription] = useState("");
  const user = useAuthStore((state) => state.user);


  const handleEditPostDescription = async (id: any, n: any) => {
    if (!id) return;
    try {
      const response = await fetch(
        `http://localhost:5002/api/gallery/posts/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPostDescription: n }),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при обновлении поста");
      }
    } catch (error) {
      console.error("Ошибка обновления:", error);
    }
  };

  useEffect(() => {
    // fetchUserWithPosts();
    // fetchPostsWithAuthor();
  }, []);
  return (
    <fieldset className={gallery_styles.post}>
      <div className={gallery_styles.post_overlay_edit}>
        {user.id === post.author.id ? <button
          className={gallery_styles.post_edit}
          onClick={() => {
            setIsEditable(!isEditable);
            isEditable === true ? handleEditPostDescription(post.id, post.postDescription) : "";

            onEdit();
          }}
        >
          <p>{isEditable ? "save" : "edit"}</p>
        </button> : <></>}

        {isEditable ? (
          <>
            <button className={gallery_styles.post_edit} onClick={onDelete}>
              <p>remove</p>
            </button>
            <button>
              <p className={gallery_styles.post_edit} onClick={onAdd}>
                add photo
              </p>
            </button>
          </>
        ) : (
          <></>
        )}
      </div>

      <legend className={gallery_styles.post_author}>
        {isEditable ? (
          <input
            placeholder={post.author.username}
          ></input>
        ) : (
          <p>@{post.author.username}</p>
        )}
      </legend>

      
      {children}
      <p>{post.postDescription.length > 30 ? `${post.postDescription.slice(0, 30)}...` : post.postDescription}</p>
    </fieldset>
  );
};
export default Post;
