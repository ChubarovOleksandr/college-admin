import {textBlock} from "../../../store/slices/creatingPage/interfaces.ts";
import '../../../style/pages/ContentPreview/TextBlock.scss';
import 'quill/dist/quill.snow.css';

interface Props {
  contentBlock: textBlock;
}

const PreviewText = ({contentBlock}: Props) => {
  return (
    <div className='ql-editor text__block' dangerouslySetInnerHTML={{__html: contentBlock.htmlString}}/>
  )
}

export default PreviewText;