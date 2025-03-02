import { configureStore } from "@reduxjs/toolkit";
import { sectionSlice } from "./slices/sectionSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {creatingPageSlice} from "./slices/creatingPage/creatingPageSlice.ts";

export const store = configureStore({
  reducer: {
    section: sectionSlice.reducer,
    creatingPage: creatingPageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
