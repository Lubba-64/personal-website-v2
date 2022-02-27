import React from "react";
import { Page } from "../Page";
import "../../index.scss";

export const Blog = () => {
  return <p>coming soon!</p>;
};
export const BlogPage: Page = {
  name: "Blog",
  jsx: Blog,
  route: "/Blog",
  isHeaderPage: true,
};
export default BlogPage;
