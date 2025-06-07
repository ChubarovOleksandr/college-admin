import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SectionEdit from "./pages/SectionEdit";
import CreatePage from "./pages/CreatePage.tsx";
import Layout from "./layouts/Layout";
import "./style/Main.scss";
import { UsersPage } from "./pages/UsersPage.tsx";
import { RoutesEnum } from "./routes.ts";
import { AuthorizedPage } from "./pages/AuthorizedPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={RoutesEnum.Auth} element={<AuthorizedPage />} />
        <Route path={RoutesEnum.SectionEdit} element={<SectionEdit />} />
        <Route path={RoutesEnum.PageCreate} element={<CreatePage />} />
        <Route path={RoutesEnum.Users} element={<UsersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
