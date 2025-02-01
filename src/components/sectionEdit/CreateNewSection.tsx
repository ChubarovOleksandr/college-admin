import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { postSectionsThunk } from "../../store/slices/sectionSlice";
import { sectionInterface } from "../../types/section";

interface Props {
  getSections: () => void;
  sections: sectionInterface[];
}

const CreateNewSection = ({ sections, getSections }: Props) => {
  const [newSectionData, setNewSectionData] = useState({ name: "", url: "", tabs: [] });

  const dispatch = useAppDispatch();

  const addNewSection = async () => {
    const requestData = {
      url: "header/save",
      body: [...sections, newSectionData],
    };

    await dispatch(postSectionsThunk(requestData));    
    getSections();
  };

  return (
    <div className="editing-block">
      <label>
        Введіть назву вкладки
        <input
          type="text"
          value={newSectionData.name}
          onChange={(e) =>
            setNewSectionData((prevState) => ({ ...prevState, name: e.target.value }))
          }
          className="default-input"
        />
      </label>
      <label>
        URL (Необов'язково)
        <input
          type="text"
          value={newSectionData.url}
          onChange={(e) =>
            setNewSectionData((prevState) => ({ ...prevState, url: e.target.value }))
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
