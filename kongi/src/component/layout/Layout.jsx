import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return(
    <>
      <Navbar />
      <div className="pt-20 text-amber-400 min-h-screen px-20">
        <Outlet />
      </div>
    </>
  );
}