import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddVehicle from './AddVehicle'
import { useSelector } from 'react-redux'
import { CiEdit } from "react-icons/ci";


const VahicalManagement = () => {
  const selector=useSelector((state)=>state.vehiclemanagement.data)
  const navigate=useNavigate()

const [data,setData]=useState([''])
const handleclick=()=>{
  navigate('addvehical')
  


}

  return (
    <div>
      <h1>vehicalmanagement</h1>
      <button onClick={handleclick} className='bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded'>Add Vehicle</button>
   <div className='grid grid-cols-3 gap-3'>
      {selector.map((val,i)=>{
              return<>
      <div class="container px-2 py-5 ">
    <div class="flex flex-wrap -m-4">
      <div class="p-2 md:w-1/2">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="  object-cover object-center" src="car-logo.avif" alt="blog"/>
          <div class="p-6">
            
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{val.vehiclebrand}</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{val.vehiclemodel}</h1>
            <p class="leading-relaxed mb-3">{val.vehiclenumber}</p>
            <div class="flex items-center flex-wrap ">
           
              <span class="text-gray-400   items-center md:h-11   border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
           
            </div>
          
       
        </div>
        </div>
        </div>
      </div>
      </div>
      </>
        })
         }
         </div>
      
     
      </div>
              );
            }
{/*        
       <div class="container mx-auto">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle Brand</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle Model</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle Number</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Availability</th>

      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
    {selector.map((val,i)=>{
      return <>
      <tr key={i} >
        <td>{val.vehiclebrand}</td>
       <td>{val.vehiclemodel}</td>
       <td>{val.vehiclenumber}</td>
       <td><CiEdit></CiEdit></td>

      </tr>
      </>
    })}

</tbody>
       </table>
       </div>
        */}
     



export default VahicalManagement;
