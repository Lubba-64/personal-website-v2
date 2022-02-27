import React from "react";
import "../../index.scss";
import { whatIKnow } from "../Constants";
import { ContentPanel } from "../Components/ContentPanel";
import { Link } from "../Components/Link";
import { Page } from "../Page";

export const Accomlishments = () => {
  return (
    <div>
      <ContentPanel title="Programming stuff I know">
        <ul>
          {whatIKnow.map((category) => (
            <li key={category.name}>
              {category.name}
              {" --> "}
              {category.items.map((item) => item + ", ")}
            </li>
          ))}
        </ul>
      </ContentPanel>
      <ContentPanel title="I've made some websites!">
        <ul>
          <li>
            <Link location="http://opensourcechess.com/">
              OpenSourceChess.com (currently outdated...)
            </Link>
          </li>
          <li>This website!</li>
        </ul>
      </ContentPanel>
      <ContentPanel title="I've made some games (and stuff)!">
        <p>note, I provided the unity and C# experience, not the art.</p>
        <ul>
          <li>
            <Link location="https://soulshardstudios.itch.io/rent-spent">
              Rent Spent (actually good)
            </Link>
          </li>
          <li>
            <Link location="https://soulshardstudios.itch.io/shot-n-slash">
              Shot N Slash (48 hours makes for a mid game tbh)
            </Link>
          </li>
          <li>
            <Link location="https://github.com/SoulShardStudos/ThrowEverythingBuildArchive">
              ThrowEverything (old, unfinished...)
            </Link>
          </li>
        </ul>
        <p>Social Links</p>
        <ul>
          <li>
            <Link location="https://www.youtube.com/channel/UCE-X8qRPOBSE-tthvbh94dw">
              my studio's youtube
            </Link>
          </li>
          <li>
            <Link location="https://discord.com/invite/8mGuVCkQFZ">
              my studio's discord
            </Link>
          </li>
          <li>
            <Link location="https://github.com/SoulShardStudos">
              my studio's github
            </Link>
          </li>
        </ul>
      </ContentPanel>
      <p style={{ marginLeft: "10px" }}>
        Oh yeah I also got employed, which I would consider an accomplishment in
        today's economy, haha.
      </p>
    </div>
  );
};

export const AccomplishmentsPage: Page = {
  name: "Accomplishments",
  jsx: Accomlishments,
  route: "/Accomplishments",
  isHeaderPage: true,
};
export default AccomplishmentsPage;
