import React, { useState } from "react";
import { Page } from "./Page";
import "./Header.scss";
import "../index.scss";

interface Props {
  pages: Page[];
  onClick?: (page: Page) => void;
}

export const Header = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<Page>(props.pages[0]);
  return (
    <div>
      <div className="__header_button_container__">
        {props.pages.map((page) => (
          <button
            className="__header_button__"
            key={page.pageName}
            onClick={() => {
              setCurrentPage(page);
              if (props.onClick !== undefined) props.onClick(page);
            }}
          >
            <p className="__header_text__">{page.pageName}</p>
            {page.icon !== undefined && page.icon !== "" ? (
              <img src={page.icon} alt="!" className="__header_icon__" />
            ) : (
              <div />
            )}
          </button>
        ))}
      </div>
      {currentPage.jsx()}
    </div>
  );
};
