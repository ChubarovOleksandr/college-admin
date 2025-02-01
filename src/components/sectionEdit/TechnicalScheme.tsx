import { sectionInterface } from "../../types/section";

interface Props {
  sections: sectionInterface[];
}

const TechnicalScheme = ({ sections }: Props) => {
  console.log(sections[0]);

  return (
    <div className="technical-scheme">
      {sections.map((section, index) => (
        <div className="section-branch" key={index}>
          <span className="section-name">{section.name}</span>
          <span className="section-url">{section.url}</span>
          {section.tabs &&
            section.tabs.map((tab, tabIndex) => (
              <div className="tab" key={tabIndex}>
                <span className="tab-name">{tab.tabName}</span>
                <span className="tab-url">{tab.url}</span>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default TechnicalScheme;
