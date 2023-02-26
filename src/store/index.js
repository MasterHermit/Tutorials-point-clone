import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { coursesApi } from "../api/courseSlice";
import { jobsApi } from "../api/jobsSlice";
import { quizApi } from "../api/quizSlice";
import { changeDarkMode, userReducer } from "../slices/userSlices";

const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      coursesApi.middleware,
      jobsApi.middleware,
      quizApi.middleware
    );
  },
});

setupListeners(store.dispatch);

export { store, changeDarkMode };
export { useFetchCoursesQuery } from "../api/courseSlice";
export { useFetchJobsQuery } from "../api/jobsSlice";
export { useFetchQuizQuery } from "../api/quizSlice";
