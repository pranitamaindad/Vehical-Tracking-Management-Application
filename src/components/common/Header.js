import React from "react";
import { SIDEBAR_Links } from "../constants/Navigation";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
const Header = () => {
  let location = useLocation();
  const [breadCrums, setBreadCrumbs] = useState([]);

const routeMap={
  vehiclemanagement:"VehicleManagement",
  drivermanagement:"DriverManagement",
}
useEffect(() => {
const routes = location.pathname.split("/").filter((route) => route !== "");
setBreadCrumbs(routes.map((route) => routeMap[route]));
}, [location]);


  return (
    <div className="text-white h-28" >
     
     <header class="text-white body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    
  </div>
</header>



     

    </div>
  );
}

export default Header;
