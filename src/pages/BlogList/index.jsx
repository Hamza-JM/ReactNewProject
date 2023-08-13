import React from "react";
import PostCard from "../../componements/PostCard";
import { fetchPosts } from "../../store/postSLice";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
function index() {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div className="flex-grow">
      {posts.map((post) => {
        return (
          <PostCard
            key={post._id}
            title={post.title}
            description={post.description}
            createdAt={post.createdAt}
            id={post.id}
          />
        );
      })}
    </div>
  );
}
export default index;
