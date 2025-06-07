import {useId, useState} from "react";
import {LoadInputBlock} from "./LoadInputBlock.tsx";
import {useAppDispatch} from "../../../../store/store.ts";
import {addNewBlock} from "../../../../store/slices/creatingPage/creatingPageSlice.ts";
import {imageBlock} from "../../../../store/slices/creatingPage/interfaces.ts";
import {blockTypeEnum} from "../../../../store/slices/creatingPage/enums.ts";

interface LoadBlocksProps {
    imageCounter: number;
}

export const LoadBlocks = ({imageCounter}: LoadBlocksProps) => {
    const dispatch = useAppDispatch();

    const [loadedImages, setLoadedImages] = useState<File[]>([]);
    const id = useId();

    const handleLoadFile = (image: File) => {
        setLoadedImages(prev => [...prev, image]);
    }

    const handleSave = () => {
        const imageBlock: imageBlock = {
            blockId: id,
            images: loadedImages,
            type: blockTypeEnum.image,
        }

        dispatch(addNewBlock(imageBlock));
    }

    const isBtnDisabled = loadedImages.length !== imageCounter;

    return (
        <div className='load-blocks'>
        {Array.from({length: imageCounter}).map((_, index) => (
            <LoadInputBlock key={index} index={index} handleLoadFile={handleLoadFile}/>
        ))}
        <button disabled={isBtnDisabled} onClick={handleSave}>Далі</button>
    </div>
    );
}