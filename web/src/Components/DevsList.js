import React from "react";
import DevCard from "./DevCard";
import styled from "styled-components";

const DevListComponent = () => {
  return (
    <DevList>
      <DevCard
        avatar_url={"https://avatars0.githubusercontent.com/u/41806813?s=40&v=4"}
        name={"joaopmendes"}
        skills={"React, Node, Laravel"}
        linkProfile={"http://github.com"}
        bio={
          "Ea sunt labore proident consectetur anim nulla ea anim officia pariatur pariatur.Exercitation aute proident fugiat adipisicing.Qui eu aliquip dolor ad pariatur esse ex esse id laboris.Irure nostrud aliquip deserunt nostrud nisi mollit.Elit do ex duis commodo deserunt ullamco sunt consectetur."
        }
      />
      <DevCard
        avatar_url={"https://avatars0.githubusercontent.com/u/41806813?s=40&v=4"}
        name={"joaopmendes"}
        skills={"React, Node, Laravel"}
        linkProfile={"http://github.com"}
        bio={
          "Ea sunt labore proident consectetur anim nulla ea anim officia pariatur pariatur.Exercitation aute proident fugiat adipisicing.Qui eu aliquip dolor ad pariatur esse ex esse id laboris.Irure nostrud aliquip deserunt nostrud nisi mollit.Elit do ex duis commodo deserunt ullamco sunt consectetur."
        }
      />
      <DevCard
        avatar_url={"https://avatars0.githubusercontent.com/u/41806813?s=40&v=4"}
        name={"joaopmendes"}
        skills={"React, Node, Laravel"}
        linkProfile={"http://github.com"}
        bio={
          "Ea sunt labore proident consectetur anim nulla ea anim officia pariatur pariatur.Exercitation aute proident fugiat adipisicing.Qui eu aliquip dolor ad pariatur esse ex esse id laboris.Irure nostrud aliquip deserunt nostrud nisi mollit.Elit do ex duis commodo deserunt ullamco sunt consectetur."
        }
      />
    </DevList>
  );
};
const DevList = styled.main`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default DevListComponent;
