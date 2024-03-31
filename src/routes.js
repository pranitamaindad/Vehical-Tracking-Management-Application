import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import Sidebar from './components/common/Sidebar'
import BookingVehical from './components/BookingVehical'
import DriverManagement from './components/DriverManagement'
import RentVehical from './components/RentVehical'
import VahicalManagement from './components/VahicalManagement'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Layout from './components/common/Layout'
import AddVehicle from './components/AddVehicle'
import AddDriver from './components/AddDriver'
import CalendarView from './components/CalenderView'
const RoutesNew = () => {
  // <Link to='/sidebar/vehicalmanagement'>VahicalManagement</Link>

  return (
    <div>
      
            <Routes>
            {/* <Route path="login" element={<Navigate to="Login" />}>
          {" "}
        </Route> */}
        <Route path="login" element={<Login></Login>}></Route>
        {/* <Route path="sidebar" element={<Sidebar></Sidebar>}></Route> */}

        <Route path='/' element={<Layout></Layout>}>
          {" "}
      
        <Route
          path="bookingvehical"
          element={<BookingVehical></BookingVehical>}
        ></Route>
        <Route
          path="vehicalmanagement/*"
          element={<VahicalManagement></VahicalManagement>}>

          </Route>      
              <Route path='vehicalmanagement/addvehical' element={<AddVehicle></AddVehicle>}></Route>


        <Route
          path="drivermanagement"
          element={<DriverManagement></DriverManagement>}
        ></Route>
        <Route path='drivermanagement/adddriver' element={<AddDriver></AddDriver>}></Route>
        <Route path="rentvehical" element={<RentVehical></RentVehical>}></Route>
        </Route>
       <Route path='dashboard' element={<CalendarView></CalendarView>}></Route>

       
      </Routes>
    </div>
  )
}

export default RoutesNew;
