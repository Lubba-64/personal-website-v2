import React, { HTMLAttributeAnchorTarget } from "react";
import "./Link.scss";
import "../index.scss";

export function lnk_open_tgt_blnk(url: string) {
  let _window = window.open(url, "_blank", "noopener noreferrer");
  if (_window !== null) _window.opener = null;
}
export function lnk_open_tgt_none(url: string) {
  let _window = window.open(url, "", "noopener noreferrer");
  if (_window !== null) _window.opener = null;
}

export function lnk_open(url: string, target?: HTMLAttributeAnchorTarget) {
  if (url.includes("mailto:")) {
    window.location.href = url;
    return;
  }
  if (target !== undefined) {
    if (target === "_blank") {
      lnk_open_tgt_blnk(url);
    } else if (
      target === "_parent" ||
      target === "_self" ||
      target === "_top"
    ) {
      lnk_open_tgt_none(url);
    }
    return;
  }
  lnk_open_tgt_none(url);
}

interface Props {
  location: string;
  target: HTMLAttributeAnchorTarget;
  children: string;
}

export const Link = (props: Props) => {
  return (
    <a href={props.location} target="" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};
