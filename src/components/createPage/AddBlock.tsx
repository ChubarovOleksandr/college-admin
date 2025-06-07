import {useState} from "react";
import {blockTypeEnum} from "../../store/slices/creatingPage/enums.ts";
import {useAppDispatch} from "../../store/store.ts";
import {selectNewBlockType} from "../../store/slices/creatingPage/creatingPageSlice.ts";

const blockTypeTranslate = {
    [blockTypeEnum.text]: 'Текст',
    [blockTypeEnum.image]: 'Зображення',
    [blockTypeEnum.video]: 'Відео',
}

const AddBlock = () => {
    const dispatch = useAppDispatch();
    const [wasClicked, setWasClicked] = useState(false);
    const [newBlockType, setNewBlockType] = useState<blockTypeEnum>();

    const onSaveNewBlockType = () => {
        if (newBlockType) {
            dispatch(selectNewBlockType(newBlockType));
        } else {
            alert('Оберіть тип нового блоку');
        }
    }

    return (
        <div className="add-block">
            {wasClicked ? (
                <div className="select__block-type">
                    <span>Оберіть тип нового контенту, який ви хочете додати</span>
                    {Object.values(blockTypeEnum).map((blockType) => (
                        <label key={blockType} onClick={() => setNewBlockType(blockType)}>
                            <input type="radio" name='newBlockType'/>
                            {blockTypeTranslate[blockType]}
                        </label>
                    ))}
                    <button onClick={onSaveNewBlockType}>Далі</button>
                </div>
            ) : (
                <div onClick={() => setWasClicked(true)} className="plus-block">+</div>
            )}
        </div>
    )
}

export default AddBlock;