import { useContext } from "react";
import { Context as BlogContext } from "../context/BlogContext";

const BlogPosts = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <div>
      <h2>Blog Posts</h2>
      <button onClick={addBlogPost}>Add Blog Post</button>
      <div>
        {state.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
