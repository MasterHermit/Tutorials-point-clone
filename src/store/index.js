import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { coursesApi } from "../api/courseSlice";
import { changeDarkMode, userReducer } from "../slices/userSlices";

const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(coursesApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store, changeDarkMode };
export { useFetchCoursesQuery } from "../api/courseSlice";
