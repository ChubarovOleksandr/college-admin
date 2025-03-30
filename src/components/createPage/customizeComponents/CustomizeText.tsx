import {useEffect, useId, useRef, useState} from "react";
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import {useAppDispatch} from "../../../store/store.ts";
import {addNewBlock} from "../../../store/slices/creatingPage/creatingPageSlice.ts";
import {textBlock} from "../../../store/slices/creatingPage/interfaces.ts";
import {blockTypeEnum} from "../../../store/slices/creatingPage/enums.ts";

export const CustomizeText = () => {
  const dispatch = useAppDispatch();

  const editorRef = useRef<HTMLDivElement | null>(null);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const blockId = useId();

  const onSaveText = () => {
    const newBlock: textBlock = {
      blockId,
      htmlString: htmlContent,
      type: blockTypeEnum.text,
    }

    dispatch(addNewBlock(newBlock))
  }

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'align': []}],
            ['link'],
            [{'color': []}],
            [{'background': []}],
            [{'font': []}],
            [{'size': ['small', 'normal', 'large', 'huge']}],
          ]
        }
      });

      quill.on('text-change', () => {
        setHtmlContent(quill.root.innerHTML);
      });
    }
  }, []);

  return (
    <div className='customize-text'>
      <span className='info'>Зробіть будь-яке текстове поле, користуючись наступними інструментами</span>
      <div className='editor-wrapper'>
        <div className='editor' ref={editorRef}></div>
      </div>
      <button className='save-btn' onClick={onSaveText}>Зберегти</button>
    </div>
  )
}