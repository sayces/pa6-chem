import React, { useEffect, useState } from "react";
import gallery_styles from "../_gallery.module.scss";
import { deletePost, getAllPosts } from "../../../../api/apiGallery";

const Post = ({ children, post, onDelete, onEdit }: { children: React.ReactNode; post: any; onDelete: any; onEdit: any }) => {

  const [isEditable, setIsEditable] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchAllPosts = async () => {
    await getAllPosts();
  }

  

  useEffect(() => {
    
    fetchAllPosts;
    
  }, [])

  return (
    <fieldset className={gallery_styles.post}>
      <div className={gallery_styles.post_overlay_edit}>
        <button className={gallery_styles.post_edit} onClick={() => {setIsEditable(!isEditable); onEdit()}}>
          <p>{isEditable ? "save" : "edit"}</p>
        </button>

        {
          isEditable ? 
          <button className={gallery_styles.post_edit} onClick={onDelete} >
            <p>remove</p>
          </button>
          : 
          <></>
        }


      </div>
      <legend className={gallery_styles.post_name}>{post.postName}</legend>
      
      {children}
    </fieldset>
  );
};
export default Post;
