import { useMemo } from "react";

export const useSortedPost = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log("POSTS GOT SORTED");
        if (sort && sort !== "date") {
          return [...posts].sort((a, b) =>
            a[sort].localeCompare(b[sort])
          );
        }
        if (sort === "date") {
          for (let i = 0; i < posts.length - 1; i++) {
            for (let j = 0; j < posts.length - 1; j++) {
              if (posts[j + 1].id < posts[j].id) {
                let tmp = posts[j];
                posts[j] = posts[j + 1];
                posts[j + 1] = tmp;
              }
            }
          }
        }
        return posts;
      }, [sort, posts]);
    return sortedPosts
}

export const usePost = (posts, sort, query) => {
    const sortedPosts = useSortedPost(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
          (post.title+ " " + post.body).toLowerCase().includes(query.toLowerCase())
        );
      }, [query, sortedPosts]);
    return sortedAndSearchedPosts;
}
