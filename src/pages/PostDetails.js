import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context as BlogContext } from "../context/BlogContext";

export const PostDetails = () => {
  const { id } = useParams();

  const { state } = useContext(BlogContext);

  const post = state.find((item) => item.id == id);

  return (
    <div>
      <h2>Post Details Page</h2>
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
    </div>
  );
};
