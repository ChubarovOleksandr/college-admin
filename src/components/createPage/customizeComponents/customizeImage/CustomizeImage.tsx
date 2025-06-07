import {useState} from "react";
import {PreviewBlock} from "./PreviewBlock.tsx";
import {LoadBlocks} from "./LoadBlocks.tsx";

export const CustomizeImage = () => {
  const [selectedImageCounts, setSelectedImageCounts] = useState<number>();

  return (
    <div className='customize-image'>
      {!selectedImageCounts && <div className='select-counts'>
        <span className='info'>Оберіть кількість відображення фотографій</span>
        <div className="preview-wrapper">
          <PreviewBlock blockCount={1} handleClick={(count) => setSelectedImageCounts(count)}/>
          <PreviewBlock blockCount={2} handleClick={(count) => setSelectedImageCounts(count)}/>
          <PreviewBlock blockCount={3} handleClick={(count) => setSelectedImageCounts(count)}/>
        </div>
      </div>
      }
      {selectedImageCounts &&  <div className='load-images'>
        <span className="info">Оберіть фото по порядку відображення</span>
        <LoadBlocks imageCounter={selectedImageCounts}/>
      </div>}
      {/*<span className='info'>Оберіть фото на вашому компьютері, або перетяніть його сюди</span>*/}

    </div>
  )
}