import React, { useState } from "react";
import { Page } from "../Page";
import "./Header.scss";
import "../../index.scss";
import { useNavigate } from "react-router-dom";
import { lnk_open } from "./Link";

interface Props {
  pages: Page[];
  children: React.ReactNode;
}

export const Header = (props: Props) => {
  const nav = useNavigate();
  return (
    <div>
      <div className="__header_outline__">
        <div className="__header_button_container__">
          {props.pages.map((page) => (
            <button
              className="__header_button__"
              key={page.name}
              onClick={() => {
                if (page.route !== undefined) nav(page.route);
                if (page.link !== undefined) lnk_open(page.link);
              }}
            >
              <h2 className="__header_text__">{page.name}</h2>
              {page.icon !== undefined && page.icon !== "" ? (
                <img src={page.icon} alt="!" className="__header_icon__" />
              ) : (
                <div />
              )}
            </button>
          ))}
        </div>
      </div>

      {props.children}
    </div>
  );
};
