import React from "react";
import "../index.scss";
interface Props {
  children: React.ReactNode;
  title: string;
}

export const ContentPanel = (props: Props) => {
  return (
    <div className="__content_bar__">
      <h2 className="__title__">{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
};
