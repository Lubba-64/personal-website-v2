import React from "react";
import { PageMaker } from "./Components/PageMaker";
import mainPages from "./Pages";

export const AppRoot = () => {
  return <PageMaker pages={mainPages} />;
};
