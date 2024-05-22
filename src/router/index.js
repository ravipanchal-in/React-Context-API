import { createBrowserRouter } from "react-router-dom";
import BlogPosts from "../pages/BlogPosts";
import CreatePost from "../pages/CreatePost";
import { PostDetails } from "../pages/PostDetails";
import AppLayout from "../AppLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>Error Page : Something went wrong</div>,
    children: [
      {
        path: "/",
        element: <BlogPosts />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/post-details/:id",
        element: <PostDetails />,
      },
    ],
  },
]);

export default appRouter;
