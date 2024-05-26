import { useContext, useEffect } from "react";
import { Context as BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

const BlogPosts = () => {
  const { state, getBlogPosts, addBlogPost } = useContext(BlogContext);

  useEffect(() => {
    if (state.length == 0) {
      getBlogPosts();
    }
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <button onClick={addBlogPost}>Add Blog Post</button>
      <div>
        {state.map((item, index) => (
          <div key={index}>
            <Link to={"/post-details/" + item.id}>{item.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
