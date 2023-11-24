import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

//If you want to open comments on post, add this in post__btns
//<MyButton onClick={() => navigate(`/posts/${number}`)}>Open</MyButton>

const PostItem = ({ number, post, remove }) => {
  const navigate = useNavigate()
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
