import React from "react";

export function lnk_open_tgt_blnk(url: string) {
  let _window = window.open(url, "_blank", "noopener noreferrer");
  if (_window !== null) _window.opener = null;
}
export function lnk_open_tgt_none(url: string) {
  let _window = window.open(url, "", "noopener noreferrer");
  if (_window !== null) _window.opener = null;
}

type targets = "blank" | "none";

export function lnk_open(url: string, target?: targets) {
  if (url.includes("mailto:")) {
    window.location.href = url;
    return;
  }
  if (target !== undefined) {
    if (target === "blank") {
      lnk_open_tgt_blnk(url);
    } else if (target === "none") {
      lnk_open_tgt_none(url);
    }
    return;
  }
  lnk_open_tgt_none(url);
}

interface Props {
  location: string;
  target: targets;
  text: string;
}

export const link = (props: Props) => {
  return (
    <button
      onClick={() => {
        if (props.target === "blank") lnk_open_tgt_blnk(props.location);
        else lnk_open_tgt_none(props.location);
      }}
    >
      {props.text}
    </button>
  );
};
