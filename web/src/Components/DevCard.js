import React from "react";
import styled from "styled-components";

const DevCard = ({ avatar_url, name, skills, bio, linkProfile }) => {
  return (
    <Dev>
      <DevHeader>
        <DevHeaderImage>
          <img width="54px" src={avatar_url} />
        </DevHeaderImage>
        <DevHeaderInfo>
          <strong>{name}</strong>
          <p>{skills}</p>
        </DevHeaderInfo>
      </DevHeader>
      <DevBio>
        <p>{bio}</p>

        <a href={linkProfile} target="_blank">
          Github
        </a>
      </DevBio>
    </Dev>
  );
};
const Dev = styled.section`
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px 20px;
`;
const DevHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;
const DevHeaderImage = styled.header`
  display: flex;

  grid-column-start: 1;
  grid-column-end: 1;

  img {
    border-radius: 50%;
  }
`;
const DevHeaderInfo = styled.header`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  grid-column-start: 2;
  grid-column-end: 10;
  margin-left: 20px;
  strong {
    font-size: 16px;
    color: #333;
  }
  p {
    color: #999;
    font-size: 13px;
    margin-top: 2px;
  }
`;
const DevBio = styled.div`
  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }
  a {
    color: #8e4dff;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: #5a2ea6;
    }
  }
`;
export default DevCard;
