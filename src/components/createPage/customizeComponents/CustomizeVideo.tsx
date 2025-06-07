import {useState} from "react";
import shortid from 'shortid';
import {useAppDispatch} from "../../../store/store.ts";
import {addNewBlock} from "../../../store/slices/creatingPage/creatingPageSlice.ts";
import {videoBlock} from "../../../store/slices/creatingPage/interfaces.ts";
import {blockTypeEnum} from "../../../store/slices/creatingPage/enums.ts";

export const CustomizeVideo = () => {
  const dispatch = useAppDispatch();

  const [videoUrl, setVideoUrl] = useState('');
  const blockId = shortid();

  const onSave = () => {
    if(videoUrl) {
      const newBlock: videoBlock = {
        blockId,
        url: videoUrl,
        type: blockTypeEnum.video,
      }

      dispatch(addNewBlock(newBlock));
    }
  }

  return (
    <div className='customize-video'>
      <label>
        Вставте посилання на відео. На данний момент підтримується посилання відео тільки з гугл диску!
        <input type="text" onChange={e => setVideoUrl(e.target.value)} placeholder='приклад: https://youtube.com/video-dlya-texnikuma'/>
      </label>
      <button onClick={onSave}>Зберегти</button>
    </div>
  )
}