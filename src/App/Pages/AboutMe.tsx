import React from "react";
import { ContentPanel } from "../Components/ContentPanel";
import "../../index.scss";
import { employed_at } from "../Constants";
import { Page } from "../Page";

export const AboutMe = () => {
  return (
    <div>
      <ContentPanel title="About Myself">
        <p>In terms of things about myself I think the big points are these</p>
        <ul>
          <li>Gaming, lots of gaming.</li>
          <li>Programming, Lots of programming.</li>
          <li>A constant desire for growth, and betterment of myself.</li>
          <li>Currently Employed at {employed_at} as a software dev.</li>
          <li>Speedrunning, occasionally</li>
          <li>Video making and streaming, occasionally</li>
          <li>PC building, very occasionally</li>
          <li>TLDR I'm a big tech guy, me like tech. ooga booga ;)</li>
        </ul>
      </ContentPanel>

      <ContentPanel title="Mission In Life">
        <p>
          There are lots of things that I enjoy doing, but my main mission in
          life is to care for my friends and faily while hopefully one day
          finishing a huge project, whatever that happens to mean when I
          actually do it.
        </p>
      </ContentPanel>
    </div>
  );
};

export const AboutMePage: Page = {
  name: "About Me",
  jsx: AboutMe,
  route: "/AboutMe",
  isHeaderPage: true,
};
export default AboutMePage;
