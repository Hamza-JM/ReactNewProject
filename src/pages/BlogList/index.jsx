import React from "react";
import PostCard from "../../componements/PostCard";

import { useSelector } from "react-redux";

function index() {
  const { posts } = useSelector((state) => state.posts);
  return (
    <div className="flex-grow">
      {posts.map((post) => {
        return (
          <PostCard
            key={post.title}
            title={post.title}
            description={post.description}
            createdAt="8/12/2023"
          />
        );
      })}
    </div>
  );
}
export default index;
