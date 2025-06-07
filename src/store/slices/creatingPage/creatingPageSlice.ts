import { createSlice } from "@reduxjs/toolkit";
import { blockTypeEnum } from "./enums.ts";
import {
  imageBlock,
  newPageInterface,
  textBlock,
  videoBlock,
} from "./interfaces.ts";

const initialState: newPageInterface = {
  pageId: null,
  content: [],
  newBlockType: null,
};

export const creatingPageSlice = createSlice({
  name: "creatingPage",
  initialState,
  reducers: {
    setPage(state, action: { payload: newPageInterface; type: string }) {
      state.pageId = action.payload.pageId;
      state.newBlockType = action.payload.newBlockType;
      state.content = action.payload.content;
    },
    selectNewBlockType(
      state,
      action: { payload: blockTypeEnum; type: string },
    ) {
      state.newBlockType = action.payload;
    },
    addNewBlock(
      state,
      action: { payload: videoBlock | textBlock | imageBlock; type: string },
    ) {
      state.content.push(action.payload);
      state.newBlockType = null;
    },
    removeBlockType(state, action: { payload: string; type: string }) {
      state.content = state.content.filter(
        (createdBlock) => createdBlock.blockId !== action.payload,
      );
    },
  },
});

export const { selectNewBlockType, setPage, addNewBlock, removeBlockType } =
  creatingPageSlice.actions;
