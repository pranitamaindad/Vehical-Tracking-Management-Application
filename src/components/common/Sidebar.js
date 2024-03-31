import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingVehical from "../BookingVehical";
import VahicalManagement from "../VahicalManagement";
import DriverManagement from "../DriverManagement";
import RentVehical from "../RentVehical";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCarSide } from "react-icons/fa";



import { SIDEBAR_Links } from "../constants/Navigation";

const Sidebar = () => {
  const [changeName, setChangename] = useState("sidebar");
  const navigate = useNavigate();

  // function Sidebarlinks({item}){
  //   <Link to={item.path}>{item.name}</Link>
  // }

  return (
    <>
      <div className="flex justify-center">
        <img className="flex justify-center  h-20 " src="carrent.avif"></img>

        {/* <img className="h-20 w-20 " src="car.png"></img> */}
      </div>
      <div className="flex flex-col gap-5 bg-slate-700 h-screen w-60 cursor-pointer border-spacing-2">
        {SIDEBAR_Links.map((val, i) => {
          return (
            <div className="border-spacing-4  border-white break-after-auto  ">
              <div  className="border-spacing-2 border-white border-x-gray-50  text-zinc-50 text-lg hover:text-cyan-950 hover:bg-white hover:"
                onClick={() => navigate(val.routes)}
                key={val.key}
                item={val}
              ><br></br>
              <div className="flex gap-2 justify-center">
              {val.icon}
                {val.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
