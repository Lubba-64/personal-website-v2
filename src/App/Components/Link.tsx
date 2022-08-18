import React, { HTMLAttributeAnchorTarget } from "react";
import "./Link.scss";
import "../../index.scss";

export function open_link_target_blank(url: string) {
  let _window = window.open(url, "_blank", "noopener noreferrer");
  if (_window !== null) _window.opener = null;
}
export function open_link_target_none(url: string) {
  let _window = window.open(url, "", "noopener noreferrer");
  if (_window !== null) _window.opener = null;
}

export function open_link(url: string, target?: HTMLAttributeAnchorTarget) {
  if (url.includes("mailto:")) {
    window.location.href = url;
    return;
  }
  if (target !== undefined) {
    if (target === "_blank") {
      open_link_target_blank(url);
    } else if (
      target === "_parent" ||
      target === "_self" ||
      target === "_top"
    ) {
      open_link_target_none(url);
    }
    return;
  }
  open_link_target_none(url);
}

interface Props {
  location: string;
  target?: HTMLAttributeAnchorTarget;
  children: string;
}

export const Link = (props: Props) => {
  let target: HTMLAttributeAnchorTarget =
    props.target === undefined ? "_blank" : props.target;
  return (
    <a href={props.location} target={target} rel="noopener noreferrer">
      {props.children}
    </a>
  );
};
