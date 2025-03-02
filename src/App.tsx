import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import SectionEdit from "./pages/SectionEdit";
import CreatePage from "./pages/CreatePage.tsx";
import Layout from "./layouts/Layout"
import './style/Main.scss';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="section-edit" element={<SectionEdit />} />
        <Route path="create-page" element={<CreatePage />} />
      </Route>
    </Routes>
  )
}

export default App
