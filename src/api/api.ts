import axios from "axios";
import { getAPIProps, postAPIProps } from "../types/api";

const instance = axios.create({ baseURL: "http://185.233.36.82:8000/" });

export const getAPI = async (data: getAPIProps) => {
  const { url, config } = data;
  try {
    const result = await instance.get(url, config);
    return result.data;
  } catch (error) {
    return error;
  }
};

export const postAPI = async (requestData: postAPIProps) => {
  const { url, body, config } = requestData;

  try {
    const result = await instance.post(url, body, config);
    return result.data;
  } catch (error) {
    return error;
  }
};
