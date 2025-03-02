import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.tsx";
import "../style/components/Layout.scss";

const Layout = () => {
  return (
    <main className="panel">
      <div className="page-navbar">
        <NavBar />
      </div>
      <div className="page-content">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
