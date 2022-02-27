import React from "react";
import "../index.scss";
import { knownFormats, knownFrameworks, knownLanguages } from "./Constants";
import { ContentPanel } from "./ContentPanel";

export const Accomlishments = () => {
  return (
    <div>
      <ContentPanel title="Programming stuff I know">
        <ul>
          <li>
            Languages I know
            <ul>
              {knownLanguages.map((x) => (
                <li>{x}</li>
              ))}
            </ul>
            Frameworks I know
            <ul>
              {knownFrameworks.map((x) => (
                <li>{x}</li>
              ))}
            </ul>
            Formats I know
            <ul>
              {knownFormats.map((x) => (
                <li>{x}</li>
              ))}
            </ul>
          </li>
        </ul>
      </ContentPanel>
    </div>
  );
};
