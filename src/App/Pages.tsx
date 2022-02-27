import AboutMePage from "./Pages/AboutMe";
import AccomplishmentsPage from "./Pages/Accomplishments";
import BlogPage from "./Pages/Blog";
import ContactPage from "./Pages/Contact";
import HomePage from "./Pages/Home";
import { Page } from "./Page";

export const pages: Page[] = [
  HomePage,
  AboutMePage,
  AccomplishmentsPage,
  BlogPage,
  ContactPage,
  {
    name: "Github",
    icon: "Icons/github.png",
    link: "https://github.com/Lubba-64",
    isHeaderPage: true,
  },
  {
    name: "Youtube",
    icon: "Icons/youtube.png",
    link: "https://www.youtube.com/channel/UCC6frUe5JkHnIum5V-20I1w",
    isHeaderPage: true,
  },
];
export default pages;
