import React from "react";
import { AboutMe } from "./AboutMe";
import { Header } from "./Header";
import { Home } from "./Home";
import { lnk_open_tgt_blnk } from "./Link";
import { Page } from "./Page";

const pages = [
  { pageName: "Home", jsx: Home },
  { pageName: "About Me", jsx: AboutMe },
  {
    pageName: "Github",
    icon: "Icons/github.png",
    link: "https://github.com/Lubba-64",
  },
  {
    pageName: "Youtube",
    icon: "Icons/youtube.png",
    link: "https://www.youtube.com/channel/UCC6frUe5JkHnIum5V-20I1w",
  },
];

export const AppRoot = () => {
  return (
    <div>
      <Header
        pages={pages}
        onClick={(page: Page) => {
          if (page.link !== undefined) {
            lnk_open_tgt_blnk(page.link);
          }
        }}
      />
    </div>
  );
};
