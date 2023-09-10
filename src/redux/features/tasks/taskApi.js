import baseApi from "../api/baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTask: builder.query({
      query: (email) => `/tasks?email=${email}`,
      providesTags: ["tasks"],
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),
    updateTaskStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["tasks"],
    }),
    archiveTask: builder.mutation({
      query: (id) => ({
        url: `archive-task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useGetTaskQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskStatusMutation,
  useArchiveTaskMutation,
} = taskApi;

export default taskApi;
