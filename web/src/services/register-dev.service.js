import axios from "axios";
import {SERVICE_STATUS} from "./helpers";


export default async ({githubUsername, techs, latitude, longitude}) => {
    return axios.post("/devs", {github_username: githubUsername, latitude, longitude, techs})
        .then(suc => {
           return {
               type: SERVICE_STATUS.OK,
               data: suc.data
           }
        })
        .catch(err => {
            return {
                type: SERVICE_STATUS.NOT_OK,
                data: err.data
            }
        })
}