import {blockTypeEnum} from "./enums.ts";

export interface videoBlock {
    blockId: string;
    url: string;
    type: blockTypeEnum.video;
}

export interface textBlock {
    blockId: string;
    htmlString: string;
    type: blockTypeEnum.text;
}

export interface imageBlock {
    blockId: string;
    images: File[];
    type: blockTypeEnum.image;
}

export interface newPageInterface {
    pageId: number | null;
    newBlockType: blockTypeEnum | null;
    content: (videoBlock | textBlock | imageBlock)[];
}