import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Page } from "../Page";
import { Header } from "./Header";
interface Props {
  pages: Page[];
}
export const PageMaker = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        {props.pages
          .filter((page) => page.route !== undefined)
          .map((page) => {
            return (
              <Route
                key={page.route}
                path={page.route}
                element={
                  page.jsx !== undefined ? (
                    <Header
                      key={page.name}
                      pages={props.pages.filter((page) => page.isHeaderPage)}
                    >
                      {page.jsx()}
                    </Header>
                  ) : (
                    ""
                  )
                }
              />
            );
          })}
        <Route
          path="*"
          element={
            <p style={{ marginLeft: "30px" }}>404 error! Page not found!</p>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
