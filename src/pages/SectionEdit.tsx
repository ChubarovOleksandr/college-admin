import { useEffect } from "react";
import CreateNewSection from "../components/sectionEdit/CreateNewSection";
import TechnicalScheme from "../components/sectionEdit/TechnicalScheme";
import "../style/pages/SectionEdit.scss";
import { getSectionsThunk, setSections } from "../store/slices/sectionSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

const SectionEdit = () => {
  const dispatch = useAppDispatch();

  const sections = useAppSelector((state) => state.section.sections);

  const getSections = async () => {
    const sections = await dispatch(getSectionsThunk({ url: "header/get" }));
    dispatch(setSections(sections.payload.data));
  };

  useEffect(() => {
    getSections();
  }, []);

  return (
    <div className="section-edit">
      <h1>Редагування вкладок</h1>
      <CreateNewSection sections={sections} getSections={getSections} />
      <TechnicalScheme sections={sections} />
    </div>
  );
};

export default SectionEdit;
