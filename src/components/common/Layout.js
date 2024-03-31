import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-row  h-11/12 w-12/12">
      <div className="w-60 h-full">
        <Sidebar></Sidebar>
      </div>
      <div className="flex flex-col w-screen">
        <div className="w-13/14 h-20 bg-slate-700">
          <Header></Header>
        </div>

        <div className="p-5">{<Outlet></Outlet>}</div>
      </div>
    </div>
  );
};

export default Layout;
