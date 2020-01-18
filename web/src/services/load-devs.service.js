import axios from "axios";
import {SERVICE_STATUS} from "./helpers";


export default async () => {
    return axios.get('/devs')
        .then(res => {
            console.log(res);
            return {
                type: SERVICE_STATUS.OK,
                data: res.data
            }
        })
        .catch(err => {
            return {
                type: SERVICE_STATUS.NOT_OK,
                data: err
            }
        })
}