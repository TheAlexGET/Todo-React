import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });
  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);
  return (
    <div>
      <h1>About Post</h1>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="post-title">
          {post.id}. {post.title}
        </div>
      )}
      <h1>Comments</h1>
      {isComLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          {comments.map((comm, index) => (
            <div style={{ marginTop: "15px" }} key={comm.id}>
              <h4 className="comment-email">{comm.email}</h4>
              <div className="comment-title">
                {index + 1}. {comm.name}
              </div>
              <div className="comment-body">{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
