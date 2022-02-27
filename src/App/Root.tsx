import React from "react";
import { PageMaker } from "./Components/PageMaker";
import pages from "./Pages";

export const AppRoot = () => {
  return <PageMaker pages={pages} />;
};
