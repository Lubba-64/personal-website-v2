import React from "react";
import { Page } from "../Page";

export const Blog = () => {
  return <div>coming soon!</div>;
};
export const BlogPage: Page = {
  name: "Blog",
  jsx: Blog,
  route: "/Blog",
  isHeaderPage: true,
};
export default BlogPage;
