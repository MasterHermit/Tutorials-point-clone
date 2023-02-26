import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { coursesApi } from "../api/courseSlice";
import { jobsApi } from "../api/jobsSlice";
import { changeDarkMode, userReducer } from "../slices/userSlices";

const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      coursesApi.middleware,
      jobsApi.middleware
    );
  },
});

setupListeners(store.dispatch);

export { store, changeDarkMode };
export { useFetchCoursesQuery } from "../api/courseSlice";
export { useFetchJobsQuery } from "../api/jobsSlice";
