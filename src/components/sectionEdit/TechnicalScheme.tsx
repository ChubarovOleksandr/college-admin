import { SectionInterface, TabInterface } from "../../types/section";
import SectionTabs from "./SectionTabs";
import { postSectionsThunk } from "../../store/slices/sectionSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

interface Props {
  getSections: () => void;
}

const TechnicalScheme = ({ getSections }: Props) => {
  const dispatch = useAppDispatch();
  const sections = useAppSelector((state) => state.section.sections);

  const onRemoveSection = async (sectionIndex: number) => {
    const sectionsCopy = structuredClone(sections);
    const editedSections = sectionsCopy.filter((_, index) => sectionIndex !== index);

    await dispatch(postSectionsThunk({ url: "headers", body: editedSections }));
    getSections();
  };

  const onRemoveTab = async (sectionTarget: SectionInterface, tabIndex: number) => {
    const sectionsCopy = structuredClone(sections);

    for (let i = 0; i < sectionsCopy.length; i++) {
      if (sectionsCopy[i].headerName === sectionTarget.headerName) {
        sectionsCopy[i].tabs = sectionsCopy[i].tabs.filter((_, index) => index !== tabIndex);
      }
    }

    await dispatch(postSectionsThunk({ url: "headers", body: sectionsCopy }));
    getSections();
  };

  const onCreateTab = async (sectionTarget: SectionInterface, tabData: TabInterface) => {
    const sectionsCopy = structuredClone(sections);

    for (let i = 0; i < sectionsCopy.length; i++) {
      if (sectionsCopy[i].headerName === sectionTarget.headerName) {
        sectionsCopy[i].tabs.unshift(tabData);
      }
    }

    await dispatch(postSectionsThunk({ url: "headers", body: sectionsCopy }));
    getSections();
  };

  return (
    <div className="technical-scheme">
      {sections.map((section, index) => (
        <div className="section-branch" key={index}>
          <div className="section">
            <span className="section-name">Назва: {section.headerName}</span>
            <span className="section-url">(Посилання: {section.headerUrl})</span>
            <button onClick={() => onRemoveSection(index)}>Видалити</button>
          </div>
          <SectionTabs section={section} onRemoveTab={onRemoveTab} onCreateTab={onCreateTab} />
        </div>
      ))}
    </div>
  );
};

export default TechnicalScheme;
