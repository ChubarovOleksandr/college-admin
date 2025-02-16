import { useEffect } from "react";
import CreateNewSection from "../components/sectionEdit/CreateNewSection";
import TechnicalScheme from "../components/sectionEdit/TechnicalScheme";
import "../style/pages/SectionEdit.scss";
import { getSectionsThunk, setSections } from "../store/slices/sectionSlice";
import { useAppDispatch } from "../store/store";

const SectionEdit = () => {
  const dispatch = useAppDispatch();

  const getSections = async () => {
    const sections = await dispatch(getSectionsThunk({ url: "headers" }));
    dispatch(setSections(sections.payload));
  };

  useEffect(() => {
    getSections();
  }, []);

  return (
    <div className="section-edit">
      <h1>Редагування вкладок</h1>
      <CreateNewSection getSections={getSections} />
      <div className="title">Схема вже існуючих вкладок</div>
      <TechnicalScheme getSections={getSections} />
    </div>
  );
};

export default SectionEdit;
