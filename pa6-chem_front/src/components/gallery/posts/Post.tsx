import React, { useEffect } from "react";
import gallery_styles from "../_gallery.module.scss";

const Post = (
  { children, post }: { children: React.ReactNode, post: any },
) => {
  return (
    <fieldset className={gallery_styles.post}>
      <legend className={gallery_styles.post_name}>{post.postName}</legend>
      {children}
    </fieldset>
  );
};
export default Post;
