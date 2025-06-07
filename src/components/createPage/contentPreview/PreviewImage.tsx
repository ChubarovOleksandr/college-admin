import { imageBlock } from "../../../store/slices/creatingPage/interfaces.ts";
import "../../../style/pages/ContentPreview/ImageBlock.scss";
import removeIcon from "../../../assets/delete.png";
import { useState } from "react";
import { useRemoveBlock } from "./utils.ts";

interface Props {
  contentBlock: imageBlock;
}

export const PreviewImage = ({ contentBlock }: Props) => {
  const [isHover, setHover] = useState(false);

  const onRemoveBlock = useRemoveBlock();

  return (
    <div
      className="image__blocks"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        className={`remove-btn ${isHover ? "visible" : ""}`}
        onClick={() => onRemoveBlock(contentBlock)}
      >
        <img src={removeIcon} alt="remove" />
      </button>
      {contentBlock.images.map((file, index) => {
        const objectURL = URL.createObjectURL(file);

        return <img key={index} src={objectURL} alt="image-preview" />;
      })}
    </div>
  );
};
