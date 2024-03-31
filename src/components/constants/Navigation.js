import { SlCalender } from "react-icons/sl";
import { FaCar } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";


export const SIDEBAR_Links =[
  { name: "Calender View",
  routes: "dashboard",
  path:'dashboard',
  icon:<SlCalender/>

  },

  { name: "Vehicle Management",
   routes: "vehicalmanagement",
   path:'vehicalmanagement',
   icon:<FaCar/>
   },
  { name: "Driver Management",
   routes: "drivermanagement",
   path:'drivermanagement',
   icon:<BsFillPersonFill></BsFillPersonFill>
   },
    { name: "Rent Vehical",
     routes: "rentvehical",
     path:'rentvehical'

     },
   
]