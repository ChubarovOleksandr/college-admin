import {blockTypeEnum} from "../../store/slices/creatingPage/enums.ts";
import {CustomizeVideo} from "./customizeComponents/CustomizeVideo.tsx";
import {CustomizeText} from "./customizeComponents/CustomizeText.tsx";
import {CustomizeImage} from "./customizeComponents/customizeImage/CustomizeImage.tsx";

const customizeComponentObject = {
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