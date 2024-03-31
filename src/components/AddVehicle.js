import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addvehicle } from './Slices/VehicalManagementSlice'
import { useNavigate } from 'react-router-dom'

const AddVehicle = () => {
  const selector=useSelector((state)=>state.vehiclemanagement)
  const dispatch=useDispatch()
  const navigate=useNavigate()
const [addbrand,setAddBrand]=useState('')
const [addmodel,setModel]=useState('')
const [addnumber,setNumber]=useState('')
const handlebrandchange=(e)=>{
  setAddBrand(e.target.value);
  console.log(e.target.value);

}
const handlemodelchange=(e)=>{
  setModel(e.target.value);
  console.log(e.target.value);

}
const handlenumberchange=(e)=>{
  setNumber(e.target.value);
  console.log(e.target.value);

}

const handleClick=()=>{
  dispatch(addvehicle({vehiclebrand:addbrand,vehiclemodel:addmodel,vehiclenumber:addnumber}))
  navigate(-1)
}

  console.log('addvehicle')
  return (
    <div>
      <h1>addvehical</h1>
      <div className='flex justify-center border-spacing-2 border-cyan-950'>
      <form className="w-full max-w-lg border-spacing-2 border-cyan-950">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Vehicle Brand
      </label>
      <input onChange={handlebrandchange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
Vehicle Model      </label>
      <input onChange={handlemodelchange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Vehicle Number
      </label>
     
      <input onChange={handlenumberchange}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
    </div>
    <div className='m-12'>
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
      <button className= "hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Discard
      </button>
    </div>
  </div>
</form>
</div>
    </div>
  )
}

export default AddVehicle
