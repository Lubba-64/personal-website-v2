import { AboutMe } from "./Pages/AboutMe";
import { Accomlishments } from "./Pages/Accomplishments";
import { Blog } from "./Pages/Blog";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Page } from "./Page";

export const mainPages: Page[] = [
  { name: "Home", jsx: Home, route: "/" },
  { name: "Accomplishments", jsx: Accomlishments, route: "/Accomplishments" },
  { name: "About Me", jsx: AboutMe, route: "/AboutMe" },
  { name: "Contact", jsx: Contact, route: "/Contact" },
  { name: "Blog", jsx: Blog, route: "/Blog" },
  {
    name: "Github",
    icon: "Icons/github.png",
    link: "https://github.com/Lubba-64",
  },
  {
    name: "Youtube",
    icon: "Icons/youtube.png",
    link: "https://www.youtube.com/channel/UCC6frUe5JkHnIum5V-20I1w",
  },
];
export default mainPages;
