import React from "react";
import "../../index.scss";
import { ContentPanel } from "../Components/ContentPanel";

export const Contact = () => {
  return (
    <div>
      <ContentPanel title="Contact">
        <p>
          Contacting me is as easy as sending me an email, which is my perferred
          method <b>(Lubba64@gmail.com)</b>, or messaging me on discord{" "}
          <b>(Lubba64#5426)</b>. I do have a phone number, but it is private. If
          you need to do a voice call with me discord is the only option (unless
          you've sent me an email and I deem it fit to give you my phone number)
          I am totally open to your messages about job opportunities, or other
          buisiness related inquiries If its for some other reason, thats ok
          too.
        </p>
      </ContentPanel>
    </div>
  );
};