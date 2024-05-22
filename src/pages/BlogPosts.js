import { useContext } from "react";
import BlogContext from "../context/BlogContext";

const BlogPosts = () => {
  const { blogPosts, addBlogPost } = useContext(BlogContext);

  return (
    <div>
      <h2>Blog Posts</h2>
      <button onClick={addBlogPost}>Add Blog Post</button>
      <div>
        {blogPosts.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
