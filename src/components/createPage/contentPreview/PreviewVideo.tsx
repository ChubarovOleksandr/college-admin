import {videoBlock} from "../../../store/slices/creatingPage/interfaces.ts";
import '../../../style/pages/ContentPreview/VideoBlock.scss';

interface Props {
  contentBlock: videoBlock;
}

const PreviewVideo = ({contentBlock}: Props) => {
  //TODO MAYBE ADD OPPORTUNITIES TO ADD VIDEO FROM YOUTUBE OR SOMETHING ELSE
  const driveUrl = `https://drive.google.com/file/d/${contentBlock.url.split("/d/")[1].split("/")[0]}/preview`;

  return (
    <div className="video__block">
      <iframe
        width="660"
        height="385"
        src={driveUrl}
        allow="autoplay; encrypted-media; fullscreen"
        title="Google Drive video"
      />
    </div>
  )}

export default PreviewVideo;