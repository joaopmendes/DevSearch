import React from "react";
import {Dev, DevBio, DevHeader, DevHeaderImage, DevHeaderInfo} from "./dev-card.styles";

const DevCardComponent = ({ avatar_url, name, skills, bio, linkProfile }) => {
  return (
    <Dev>
      <DevHeader>
        <DevHeaderImage>
          <img alt={"profile pic"} width="54px" src={avatar_url} />
        </DevHeaderImage>
        <DevHeaderInfo>
          <strong>{name}</strong>
          <p>{skills}</p>
        </DevHeaderInfo>
      </DevHeader>
      <DevBio>
        <p>{bio}</p>

        <a href={linkProfile} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </DevBio>
    </Dev>
  );
};

export default DevCardComponent;
