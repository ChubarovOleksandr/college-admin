import {useAppDispatch, useAppSelector} from "../store/store.ts";
import AddBlock from "../components/createPage/AddBlock.tsx";
import CustomizeNewBlock from "../components/createPage/CustomizeNewBlock.tsx";
import {NEW_PAGE_LS} from "../constants.ts";
import '../style/pages/CreatePage.scss';
import {useEffect} from "react";
import {setPage} from "../store/slices/creatingPage/creatingPageSlice.ts";
import {newPageInterface} from "../store/slices/creatingPage/interfaces.ts";

const CreatePage = () => {
  const dispatch = useAppDispatch();
  const newCreatingPage = useAppSelector(state => state.creatingPage);

  const onSavePage = () => {
    localStorage.removeItem(NEW_PAGE_LS);
  }

  useEffect(() => {
    const unfinishedPage = localStorage.getItem(NEW_PAGE_LS);
    if(unfinishedPage) {
      const parsedPageData: newPageInterface = JSON.parse(unfinishedPage);  TODO
      dispatch(setPage(parsedPageData));
    }
  }, [])

  return (
    <div className='create-page'>
      <div className='input-page-url'>
        <label>
          URL сайту (переконайтесь, що він унікальний)
          <input type='text' placeholder={'наприклад: novunu-dlya-studentiv'}/>
        </label>
        <span>Нижче створіть сторінку. Ви бачите її так, як будуть бачити і користувачі. Після завершення натисніть - Готово</span>
        <button className="btn__save-page" onClick={onSavePage}>Готово</button>
      </div>
      <div className="content">

      </div>
      {newCreatingPage.newBlockType && newCreatingPage.newBlockType ? (
        <CustomizeNewBlock newBlockType={newCreatingPage.newBlockType}/>
      ) : (
        <AddBlock />
      )}
    </div>
  )
}

export default CreatePage;