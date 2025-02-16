/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SectionInterface } from "../../types/section";
import { getAPI, postAPI } from "../../api/getAPI";
import { getAPIProps, postAPIProps } from "../../types/api";

interface stateInterface {
  sections: SectionInterface[];
}

const initialState: stateInterface = {
  sections: [],
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setSections(state, action) {
      state.sections = action.payload;
    },
  },
});

export const { setSections } = sectionSlice.actions;

/////////////// THUNK ///////////////

export const getSectionsThunk = createAsyncThunk<any, getAPIProps>(
  "section/get_thunk",
  async function (data: getAPIProps, { rejectWithValue }) {
    try {
      const response = await getAPI(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postSectionsThunk = createAsyncThunk<any, postAPIProps>(
  "section/post_thunk",
  async function (data: postAPIProps, { rejectWithValue }) {
    try {
      const response = await postAPI(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
