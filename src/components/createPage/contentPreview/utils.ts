import {
  imageBlock,
  textBlock,
  videoBlock,
} from "../../../store/slices/creatingPage/interfaces.ts";
import { useAppDispatch } from "../../../store/store.ts";
import { removeBlockType } from "../../../store/slices/creatingPage/creatingPageSlice.ts";

export const useRemoveBlock = () => {
  const dispatch = useAppDispatch();

  return (contentBlock: imageBlock | videoBlock | textBlock) => {
    dispatch(removeBlockType(contentBlock.blockId));
  };
};
