import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Layout from "./layouts/Layout"
import './style/Main.scss';
import SectionEdit from "./pages/SectionEdit";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="section-edit" element={<SectionEdit />} />
      </Route>
    </Routes>
  )
}

export default App
