import React from "react";
import "../../index.scss";
import { employed_at, days_employed } from "../Constants";
import { ContentPanel } from "../Components/ContentPanel";
import { Link } from "../Components/Link";
import { Page } from "../Page";
export const Home = () => {
  return (
    <div className="__page_root__">
      <ContentPanel title="Benjamin Hines">
        <p>AKA Lubba64</p>
        <p>
          Is a software dev, employed at {employed_at} for {days_employed()}
        </p>
        <p>
          Programming, Gaming, Speedrunning, Video/Livestream, Blog, It all
          starts here.
        </p>
        <p>
          this page was made with react, its source code is{" "}
          <Link
            location="https://github.com/Lubba-64/personal-website-v2"
            target="blank"
          >
            here
          </Link>
          .
        </p>
      </ContentPanel>
    </div>
  );
};

export const HomePage: Page = {
  name: "Home",
  jsx: Home,
  route: "/",
  isHeaderPage: true,
};
export default HomePage;
