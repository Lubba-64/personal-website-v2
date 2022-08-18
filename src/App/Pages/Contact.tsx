import React from "react";
import "../../index.scss";
import { ContentPanel } from "../Components/ContentPanel";
import { Page } from "../Page";

export const Contact = () => {
  return (
    <div className="__page_root__">
      <ContentPanel title="Contact">
        <p>
          Contacting me is as easy as sending me an email, which is my perferred
          method <b>(Lubba64@gmail.com)</b>, or messaging me on discord{" "}
          <b>(Lubba64#5426)</b>.
        </p>
      </ContentPanel>
    </div>
  );
};
export const ContactPage: Page = {
  name: "Contact",
  jsx: Contact,
  route: "/Contact",
  isHeaderPage: true,
};
export default ContactPage;
