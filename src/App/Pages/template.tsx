/**
 * copy this into a new .tsx file in the pages directory to get started!
 */

import React from "react";
import { Page } from "../Page";
import "../../index.scss";
/** this is the page's content, what gets displayed below the header */
export const Template = () => {
  return <p>template page...</p>;
};
/** this is the metadata about the page and the page content */
export const TemplatePage: Page = {
  /**page name (if its displayed in the header) */
  name: "Template",
  /** the page's content*/
  jsx: Template,
  /** the URL of the page (the current websites URL gets added to the front, so its https://thiswebsite.com/TemplatePage) */
  route: "/TemplatePage",
  /** whether this page should be globally displayed in the header */
  isHeaderPage: false,
};
/** remember to add this to the pages list in Pages.tsx! */
export default TemplatePage;
