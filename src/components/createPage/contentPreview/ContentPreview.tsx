import {useAppSelector} from "../../../store/store.ts";

export const ContentPreview = () => {
  const content = useAppSelector(state => state.creatingPage.content);

  return (
    <>
      {content.map((contentBlock, index) => ( // TODO SHOWING PREVIEW BLOCK WITH SWITCH CONSTRUCTION
        <div className='content__block' key={index}>

        </div>
      ))}
    </>
  )
}