import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const jobsApi = createApi({
  reducerPath: "jobs",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints(builder) {
    return {
      fetchJobs: builder.query({
        query: () => {
          return {
            url: "/jobs",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchJobsQuery } = jobsApi;
export { jobsApi };
