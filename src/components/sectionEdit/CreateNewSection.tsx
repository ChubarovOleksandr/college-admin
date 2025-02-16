import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { postSectionsThunk } from "../../store/slices/sectionSlice";

interface Props {
  getSections: () => void;
}

const CreateNewSection = ({ getSections }: Props) => {
  const [newSectionData, setNewSectionData] = useState({ headerName: "", headerUrl: "", tabs: [] });

  const dispatch = useAppDispatch();
  const sections = useAppSelector((state) => state.section.sections);

  const addNewSection = async () => {
    const requestData = {
      url: "headers",
      body: [...sections, newSectionData],
    };

    setNewSectionData({ headerName: "", headerUrl: "", tabs: [] });

    await dispatch(postSectionsThunk(requestData));
    getSections();
  };

  return (
    <div className="editing-block">
      <label>
        Введіть назву вкладки
        <input
          type="text"
          value={newSectionData.headerName}
          onChange={(e) =>
            setNewSectionData((prevState) => ({ ...prevState, headerName: e.target.value }))
          }
          className="default-input"
        />
      </label>
      <label>
        URL (Необов'язково)
        <input
          type="text"
          value={newSectionData.headerUrl}
          onChange={(e) =>
            setNewSectionData((prevState) => ({ ...prevState, headerUrl: e.target.value }))
          }
          className="default-input"
        />
      </label>
      <button className="btn btn-save" onClick={addNewSection}>
        Додати
      </button>
    </div>
  );
};

export default CreateNewSection;
