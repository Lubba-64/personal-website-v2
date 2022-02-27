import React from "react";
import { ContentPanel } from "./ContentPanel";
import "../index.scss";

export const AboutMe = () => {
  return (
    <div
      style={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
    >
      <ContentPanel title="About Myself">
        <p className="__p__">
          In terms of things about myself I think the big points are these
        </p>
        <ul>
          <li className="__p__">
            I am an INTJ according to the MBTI personality classification
            system.
          </li>
          <li className="__p__">
            What I'm interested in is a wide variety of things, but most of it
            revolves around technology and computing.
            <ul>
              <li className="__p__">Video Game Development</li>
              <li className="__p__">Programming in general</li>
              <li className="__p__">Video Games</li>
              <li className="__p__">PC building</li>
              <li className="__p__">Video Recording / Editing</li>
            </ul>
          </li>
          <li className="__p__">
            My favorite game is Terraria and favorite book is Homestuck
          </li>
        </ul>
      </ContentPanel>

      <ContentPanel title="Mission In Life">
        <p className="__p__">
          In terms of what I want to accomplish with my life,
          <br />
          the thing I value most in life is doing something that matters.
          <br />
          It can be something I want, and it can be fun, but if it doesn't have
          an impact on me and my
          <br />
          future and the people around me in a big way I'm not interested.
          everything I do
          <br />
          is to move forward and make an impact, even if the impact is not
          immediately tangible.
        </p>
      </ContentPanel>

      <ContentPanel title="Skills">
        <p className="__p__">
          Most of the things I am interested in I am also good at doing. I have
          been working on video games
          <br />
          for the past 2 years, and I have gotten pretty good at video game
          programming and leading my team
          <br />
          in that period of time. I am still a huge novice when it comes to
          video editing and recording, <br />
          but I know my way around OBS and am planning on upgrading to davinci
          resolve at somepoint. I have
          <br />
          also made 3 PCs for friends and have taken up PC building as a hobby,
          but some day I might try to
          <br />
          do it in a commercial sense assuming nothing else I'm doing works out
          which is unlikely. Also my
          <br />
          programming skill isn't just limited to games, as evidenced by some of
          my other projects. I just
          <br />
          like to apply my skills there because thats the most interesting thing
          to do with them at the moment.
          <br />
        </p>
      </ContentPanel>
    </div>
  );
};
