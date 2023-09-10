import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api-plan-perfect.vercel.app" }),
  endpoints: () => {},
});

export default baseApi;