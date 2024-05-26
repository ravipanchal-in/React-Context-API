import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider as BlogProvider } from "./context/BlogContext";
import "./index.css";
import App from "./AppLayout";
import appRouter from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BlogProvider>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </BlogProvider>
);
