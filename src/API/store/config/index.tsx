/* eslint-disable complexity */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/unbound-method */

import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";


export interface CommonHeaderProperties {
  "Content-Type": string | null;
}

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

// (Axios.defaults.headers as Record<string, CommonHeaderProperties>).post["Content-Type"] = "multipart/form-data";
Axios.defaults.headers.common.withCredentials = true;
Axios.defaults.headers.common["Accept-Language"] = localStorage.getItem("lang") ?? "ar";

Axios.interceptors.response.use(undefined, error => {


  return Promise.reject(error.response);
});

export const axiosBaseQuery =
  (): BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
  }> =>
  async ({ url, method, data, ...rest }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = await Axios.request({ url, method, data, ...rest });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return { error: err };
    }
  };

export const providesList = <R extends { Id: string | number }[], T extends string>(resultsWithIds: R | undefined, tagType: T) =>
  resultsWithIds ? [{ type: tagType, id: "LIST" }, ...resultsWithIds.map(({ Id }) => ({ type: tagType, id: Id }))] : [{ type: tagType, id: "LIST" }];

export default Axios;
