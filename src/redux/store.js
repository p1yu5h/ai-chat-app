import { configureStore } from "@reduxjs/toolkit";
import conversationsReducer from "./slices/conversationsSlice";

const store = configureStore({
  reducer: {
    conversations: conversationsReducer,
  },
});

export default store;
