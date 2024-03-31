import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../Slices/LoginSlice";
import VehicalManagementSlice from "../Slices/VehicalManagementSlice";
import DriverSlice from "../Slices/DriverSlice";
const store=configureStore({
  reducer:{
    login:LoginSlice,
    vehiclemanagement:VehicalManagementSlice,
  driver:  DriverSlice,
  }
})
export default store