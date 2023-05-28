import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../features/faq/faqSlice";

const store = configureStore({
  reducer: {
    faq: faqReducer,
  },
});
export default store;
