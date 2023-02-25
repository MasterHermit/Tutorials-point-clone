import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coursesApi = createApi({
  reducerPath: "courses",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints(builder) {
    return {
      fetchPosts: builder.query({
        query: () => {
          return {
            url: "/courses",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchCoursesQuery } = coursesApi;
export { coursesApi };
