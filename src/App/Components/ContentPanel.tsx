import React from "react";
import "../../index.scss";
import "./ContentPanel.scss";
interface Props {
  children: React.ReactNode;
  title: string;
}

export const ContentPanel = (props: Props) => {
  return (
    <div className="__content_panel__">
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
};
