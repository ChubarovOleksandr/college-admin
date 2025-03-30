import {useAppSelector} from "../../../store/store.ts";
import {blockTypeEnum} from "../../../store/slices/creatingPage/enums.ts";
import PreviewVideo from "./PreviewVideo.tsx";
import '../../../style/pages/ContentPreview/ContentPreview.scss';
import PreviewText from "./PreviewText.tsx";
import {textBlock, videoBlock} from "../../../store/slices/creatingPage/interfaces.ts";

export const ContentPreview = () => {
  const content = useAppSelector(state => state.creatingPage.content);

  console.log(content)
  return (
    <>
      {content.map((contentBlock) => (
        <div className='content__block' key={contentBlock.blockId}>
          {contentBlock.type === blockTypeEnum.video && <PreviewVideo contentBlock={contentBlock as videoBlock} />}
          {contentBlock.type === blockTypeEnum.text && <PreviewText contentBlock={contentBlock as textBlock} />}
        </div>
      ))}
    </>
  )
}