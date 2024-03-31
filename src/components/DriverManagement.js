import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const DriverManagement = () => {
  const selector=useSelector((state)=>state.driver.data)
  const navigate=useNavigate()

 const handleclick=()=>{
  navigate('adddriver')
 }
  return (
    <div>
      <h1>drivermanagement</h1>
      <button onClick={handleclick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Driver</button>

      <div class="container mx-auto">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver Name</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phonr Number</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>

      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
    {selector.map((val,i)=>{
      return <>
      <tr key={i} >
        <td>{val.drivername}</td>
       <td>{val.address}</td>
       <td>{val.phonenumber}</td>
       <td className='flex'><CiEdit></CiEdit><MdDelete></MdDelete></td>

      </tr>
      </>
    })}

</tbody>
       </table>
       </div>
    </div>
  )
}

export default DriverManagement
