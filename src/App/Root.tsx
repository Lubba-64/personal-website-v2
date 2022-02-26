import React from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { Page } from "./Page";
export const AppRoot = () => {
  return (
    <div>
      <Header
        pages={[{ pageName: "Home", icon: "Icons/github.png", jsx: Home }]}
        onClick={(page: Page) => {
          console.log(page);
        }}
      />
    </div>
  );
};
