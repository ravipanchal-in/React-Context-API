import createDataContext from "./createDataContext";
const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogPosts":
      return action.payload;
    case "add_blogPost":
      return [
        ...state,
        {
          id: state.length + 1,
          title: `Blog Post #${state.length + 1}`,
          body: "Lorem ipsum is a simply dummy text",
        },
      ];

    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responseData = await response.json();
    dispatch({ type: "get_blogPosts", payload: responseData });
  };
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogPost" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost },
  []
);
