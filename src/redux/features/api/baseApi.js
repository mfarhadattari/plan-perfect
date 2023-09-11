import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-plan-perfect.vercel.app",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("plan-perfect-token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["tasks", "archives"],
  endpoints: (builder) => ({
    generateJWT: builder.mutation({
      query: (email) => ({
        url: "/generate-jwt",
        method: "POST",
        body: { email: email },
      }),
    }),
    clearData: builder.mutation({
      query: (email) => ({
        url: `/clear-data?email=${email}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGenerateJWTMutation, useClearDataMutation } = baseApi;

export default baseApi;
