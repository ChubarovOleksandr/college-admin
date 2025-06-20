import { textBlock } from "../../../store/slices/creatingPage/interfaces.ts";
import "../../../style/pages/ContentPreview/TextBlock.scss";
import "quill/dist/quill.snow.css";
import removeIcon from "../../../assets/delete.png";
import { useState } from "react";
import { useRemoveBlock } from "./utils.ts";

interface Props {
  contentBlock: textBlock;
}

const PreviewText = ({ contentBlock }: Props) => {
  const [isHover, setHover] = useState(false);

  const onRemoveBlock = useRemoveBlock();

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="text__block-wrapper"
    >
      <button
        className={`remove-btn ${isHover ? "visible" : ""}`}
        onClick={() => onRemoveBlock(contentBlock)}
      >
        <img src={removeIcon} alt="remove" />
      </button>
      <div
        className="ql-editor text__block"
        dangerouslySetInnerHTML={{ __html: contentBlock.htmlString }}
      />
    </div>
  );
};

export default PreviewText;
