import React from "react";
import DevCardComponent from "./dev-card.component";
import {DevList} from "./dev-list.styles"
import {Flex} from "../../global.style";
import {PushSpinner} from "react-spinners-kit";

const DevListComponent = ({devs, isLoading}) => {

    return (
        <DevList>
            {isLoading ?  <Flex justifyContent={"center"} alignItems={"center"}><PushSpinner
                    size={30}
                    color="#686769"
                    loading={true}
                /></Flex>:
                devs.map(dev => ( <DevCardComponent
                    avatar_url={dev.avatar_url}
                    name={dev.name}
                    skills={dev.techs.join(", ")}
                    linkProfile={`http://github.com/${dev.name}`}
                    bio={dev.bio}
                />))
            }
           {}
        </DevList>
    );
};


export default DevListComponent;
