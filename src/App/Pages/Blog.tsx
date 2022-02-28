import React from "react";
import { Page } from "../Page";
import "../../index.scss";

export const Blog = () => {
  return (
    <div className="__page_root__">
      <p>coming soon!</p>
    </div>
  );
};
export const BlogPage: Page = {
  name: "Blog",
  jsx: Blog,
  route: "/Blog",
  isHeaderPage: true,
};
export default BlogPage;
