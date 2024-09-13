import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
  return (
    <div className="dark:ctp-macchiato bg-gradient-to-b from-ctp-base to-ctp-crust relative max-w-screen min-h-screen flex flex-col md:flex-row">
      <div className="w-[8vw]">
        <Header />
      </div>
      <div className="w-screen md:w-[92vw]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
