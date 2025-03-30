import {blockTypeEnum} from "./enums.ts";

export interface videoBlock {
  blockId: string;
  url: string;
  type: blockTypeEnum;
}

export interface textBlock {
  blockId: string;
  htmlString: string;
  type: blockTypeEnum.text;
}

export interface newPageInterface {
  pageId: number | null;
  newBlockType: blockTypeEnum | null;
  content: (videoBlock | textBlock)[];
}