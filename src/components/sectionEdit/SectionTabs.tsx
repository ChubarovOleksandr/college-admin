import { useState } from "react";
import { SectionInterface } from "../../types/section";

interface Props {
  section: SectionInterface;
  onRemoveTab: (section: SectionInterface, tabIndex: number) => void;
  onCreateTab: (section: SectionInterface, tabData: TabInterface) => void;
}

interface TabInterface {
  tabName: string;
  tabUrl: string;
}

const SectionTabs = ({ section, onRemoveTab, onCreateTab }: Props) => {
  const [newTabData, setNewTabData] = useState<TabInterface>({ tabName: "", tabUrl: "" });
  const [isCreatingTab, setIsCreatingTab] = useState(false);

  const validation = (obj: TabInterface) => {
    const values = Object.values(obj);
    return !values.some((field) => field === "");
  };

  const onSave = () => {
    const isValid = validation(newTabData);
    if (isValid) {
      onCreateTab(section, newTabData);
      setNewTabData({ tabName: "", tabUrl: "" });
      setIsCreatingTab(false);
    }
  };

  return (
    <>
      {section.tabs &&
        section.tabs.map((tab, tabIndex) => (
          <div className="tab" key={tabIndex}>
            <span className="tab-name">{tab.tabName}</span>
            <span className="tab-url">URL: {tab.tabUrl}</span>
            <button className="btn" onClick={() => onRemoveTab(section, tabIndex)}>
              Видалити
            </button>
          </div>
        ))}

      {isCreatingTab && (
        <div className="creating-tab">
          <input
            type="text"
            onChange={(e) =>
              setNewTabData((prevState) => ({
                ...prevState,
                tabName: e.target.value,
              }))
            }
            className="default-input"
            placeholder="Назва"
          />
          <input
            type="text"
            onChange={(e) =>
              setNewTabData((prevState) => ({
                ...prevState,
                tabUrl: e.target.value,
              }))
            }
            className="default-input"
            placeholder="URL"
          />
          <button className="btn" onClick={onSave}>
            Додати
          </button>
          <button onClick={() => setIsCreatingTab(false)} className="btn cancel">
            X
          </button>
        </div>
      )}

      <button className="add-tab" title="Додати підвкладку" onClick={() => setIsCreatingTab(true)}>
        +
      </button>
    </>
  );
};

export default SectionTabs;
