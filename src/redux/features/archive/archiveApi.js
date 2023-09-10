import baseApi from "../api/baseApi";

const archiveApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArchive: builder.query({
      query: (email) => `/archives?email=${email}`,
      providesTags: ["archives"],
    }),
    deleteArchive: builder.mutation({
      query: (id) => ({
        url: `archives/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["archives"],
    }),
  }),
});

export const { useGetArchiveQuery, useDeleteArchiveMutation } = archiveApi;

export default archiveApi;
