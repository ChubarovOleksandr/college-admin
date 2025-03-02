import {blockTypeEnum} from "../../store/slices/creatingPage/enums.ts";
import {CustomizeTitle} from "./customizeComponents/CustomizeTitle.tsx";
import {CustomizeVideo} from "./customizeComponents/CustomizeVideo.tsx";
import {CustomizeImage} from "./customizeComponents/CustomizeImage.tsx";
import {CustomizeText} from "./customizeComponents/CustomizeText.tsx";

const customizeComponentObject = {
  [blockTypeEnum.title]: CustomizeTitle,
  [blockTypeEnum.video]: CustomizeVideo,
  [blockTypeEnum.image]: CustomizeImage,
  [blockTypeEnum.text]: CustomizeText
}

interface Props {
  newBlockType: blockTypeEnum
}

const CustomizeNewBlock = ({newBlockType}: Props) => {

  const CustomizeComponent = customizeComponentObject[newBlockType] || <div>Произошла ошибка</div>;

  return <div className='customize'>
    <CustomizeComponent/>
  </div>
}

export default CustomizeNewBlock;