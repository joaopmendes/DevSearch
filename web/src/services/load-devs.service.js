import axios from "axios";
import { SERVICE_STATUS } from "./helpers";

export default async () => {
  try {
    const res = await axios.get("/devs");
    console.log("TCL: res", res);

    return {
      type: SERVICE_STATUS.OK,
      data: res.data.data
    };
  } catch (e) {
    return {
      type: SERVICE_STATUS.NOT_OK,
      data: "Could not load devs"
    };
  }
};
