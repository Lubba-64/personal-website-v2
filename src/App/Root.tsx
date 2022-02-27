import React from "react";
import { AboutMe } from "./AboutMe";
import { Header } from "./Header";
import { Home } from "./Home";
import { lnk_open } from "./Link";
import { HeaderContent } from "./Page";

const pages: HeaderContent[] = [
  { name: "Home", jsx: Home },
  { name: "About Me", jsx: AboutMe },
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

export const AppRoot = () => {
  return (
    <div>
      <Header
        pages={pages}
        onClick={(page: HeaderContent) => {
          if (page.link !== undefined) {
            lnk_open(page.link);
          }
        }}
      />
    </div>
  );
};
