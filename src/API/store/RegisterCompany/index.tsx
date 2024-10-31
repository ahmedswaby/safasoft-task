/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-undef */
import { createApi } from "@reduxjs/toolkit/query/react";

import { DTO } from "~/Models/DTO";

import { axiosBaseQuery } from "../config";

export const Company = createApi({
  reducerPath: "Company",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Company"],
  endpoints: builder => ({
    createNewCompany: builder.mutation<string, DTO.AppointemntRequest>({
      query: data => ({
        url: `/register`,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useCreateNewCompanyMutation } = Company;
