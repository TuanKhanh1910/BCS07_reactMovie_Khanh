import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducer/productReducer";

export const store = configureStore({
  // reducer
  reducer: {
    // sẽ nhận vô những state mà muốn lưu trữ

    product: productReducer,
  },
});
