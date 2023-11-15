import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const API: AxiosInstance = axios.create({
  baseURL: "http://3.145.178.76:4000",
  timeout: 120000,
});

export const getEmployee = (url: string, config?: AxiosRequestConfig) => {
  return API.get(url, config);
};

export const postData = (
  url: string,
  payload: object,
  config?: AxiosRequestConfig
) => {
  return API.post(url, payload, config);
};

export const updateData = (
  url: string,
  payload: object,
  config?: AxiosRequestConfig
) => {
  return API.put(url, payload, config);
};

export const deleteData = (url: string, config?: AxiosRequestConfig) => {
  return API.delete(url, config);
};

export default API;
