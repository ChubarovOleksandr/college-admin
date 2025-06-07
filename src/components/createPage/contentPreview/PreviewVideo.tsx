import { videoBlock } from "../../../store/slices/creatingPage/interfaces.ts";
import "../../../style/pages/ContentPreview/VideoBlock.scss";
import { useState } from "react";
import { useRemoveBlock } from "./utils.ts";
import removeIcon from "../../../assets/delete.png";

interface Props {
  contentBlock: videoBlock;
}

const PreviewVideo = ({ contentBlock }: Props) => {
  const [isHover, setHover] = useState(false);

  const onRemoveBlock = useRemoveBlock();

  const driveUrl = `https://drive.google.com/file/d/${contentBlock.url.split("/d/")[1].split("/")[0]}/preview`;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="video__block"
    >
      <button
        className={`remove-btn ${isHover ? "visible" : ""}`}
        onClick={() => onRemoveBlock(contentBlock)}
      >
        <img src={removeIcon} alt="remove" />
      </button>
      <iframe
        width="660"
        height="385"
        src={driveUrl}
        allow="autoplay; encrypted-media; fullscreen"
        title="Google Drive video"
      />
    </div>
  );
};

export default PreviewVideo;
