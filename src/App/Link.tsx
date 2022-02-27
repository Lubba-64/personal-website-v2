import React from "react";

export function lnk_open_tgt_blnk(url: string) {
  let _window = window.open(url, "_blank", "noopener noreferrer");
  if (_window !== null) _window.opener = null;
}
export function lnk_open_tgt_none(url: string) {
  let _window = window.open(url, "", "noopener noreferrer");
  if (_window !== null) _window.opener = null;
}

interface Props {
  location: string;
  target: "blank" | "none";
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
