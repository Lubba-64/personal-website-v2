import React from "react";
import { mainPages } from "../Pages";
import { Header } from "./Components/Header";
import { lnk_open } from "./Components/Link";
import { HeaderContent } from "./Page";

export const AppRoot = () => {
  return (
    <div>
      <Header
        pages={mainPages}
        onClick={(page: HeaderContent) => {
          if (page.link !== undefined) {
            lnk_open(page.link);
          }
        }}
      />
    </div>
  );
};
