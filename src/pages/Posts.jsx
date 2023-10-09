import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import Pagination from "../components/UI/pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { usePost } from "../hooks/usePost";
import { getPageCount } from "../utils/pages";
import '../styles/css/style.css'

function Posts() {
  const [posts, setPosts] = useState([
    { title: "test", body: "test", id: Date.now() },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };


  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Open Post Maker</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && (
        <h1 style={{ color: "rgb(233, 4, 253)" }}>Error ${postError}</h1>
      )}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader></Loader>
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title="List"
          remove={removePost}
        ></PostList>
      )}
      <Pagination 
      totalPages={totalPages} 
      page={page} 
      setPage={setPage}
      />
    </div>
  );
}

export default Posts;
