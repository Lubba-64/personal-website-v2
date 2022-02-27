import { AboutMe } from "./App/Pages/AboutMe";
import { Accomlishments } from "./App/Pages/Accomplishments";
import { Blog } from "./App/Pages/Blog";
import { Contact } from "./App/Pages/Contact";
import { Home } from "./App/Pages/Home";
import { HeaderContent } from "./App/Page";

export const mainPages: HeaderContent[] = [
  { name: "Home", jsx: Home },
  { name: "Accomplishments", jsx: Accomlishments },
  { name: "About Me", jsx: AboutMe },
  { name: "Contact", jsx: Contact },
  { name: "Blog", jsx: Blog },
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
