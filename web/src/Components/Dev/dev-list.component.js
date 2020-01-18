import React from "react";
import DevCardComponent from "./dev-card.component";
import {DevList} from "./dev-list.styles"
const DevListComponent = () => {
  return (
    <DevList>
      <DevCardComponent
        avatar_url={"https://avatars0.githubusercontent.com/u/41806813?s=40&v=4"}
        name={"joaopmendes"}
        skills={"React, Node, Laravel"}
        linkProfile={"http://github.com"}
        bio={
          "Ea sunt labore proident consectetur anim nulla ea anim officia pariatur pariatur.Exercitation aute proident fugiat adipisicing.Qui eu aliquip dolor ad pariatur esse ex esse id laboris.Irure nostrud aliquip deserunt nostrud nisi mollit.Elit do ex duis commodo deserunt ullamco sunt consectetur."
        }
      />
      <DevCardComponent
        avatar_url={"https://avatars0.githubusercontent.com/u/41806813?s=40&v=4"}
        name={"joaopmendes"}
        skills={"React, Node, Laravel"}
        linkProfile={"http://github.com"}
        bio={
          "Ea sunt labore proident consectetur anim nulla ea anim officia pariatur pariatur.Exercitation aute proident fugiat adipisicing.Qui eu aliquip dolor ad pariatur esse ex esse id laboris.Irure nostrud aliquip deserunt nostrud nisi mollit.Elit do ex duis commodo deserunt ullamco sunt consectetur."
        }
      />
      <DevCardComponent
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


export default DevListComponent;
