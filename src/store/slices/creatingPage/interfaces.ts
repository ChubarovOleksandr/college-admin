import {blockTypeEnum} from "./enums.ts";

export interface videoBlock {
  blockId: string;
  url: string;
}

export interface textBlock {
  blockId: string;
  htmlString: string;
}

export interface newPageInterface {
  pageId: number | null;
  newBlockType: blockTypeEnum | null;
  content: (videoBlock | textBlock)[];
}