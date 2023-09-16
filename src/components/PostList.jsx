import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition} from "react-transition-group";
import axios from "axios";

const PostList = ({ posts, title, remove }) => {
  const removePost = (post) => {
    remove(post);
  };
  if (!posts.length) {
    return (
      <h1 style={{ color: "rgb(233, 4, 253)", textAlign: "center" }}>
        Task not found
      </h1>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "rgb(233, 4, 253)" }}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
          key={post.id}
          timeout={500}
          classNames="post"
        >
        <PostItem
          number={index + 1}
          post={post}
          remove={removePost} 
        ></PostItem>
        </CSSTransition>
      ))}
      </TransitionGroup>
      
    </div>
  );
};

export default PostList;
