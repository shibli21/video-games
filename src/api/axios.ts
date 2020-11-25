import { HTTP_METHODS } from "./../types/global";
import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://api.rawg.io/api/",
});

export const createApiRequest = async (
  url: string,
  method: HTTP_METHODS,
  data
) => {
  try {
    const response = await axios({
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
