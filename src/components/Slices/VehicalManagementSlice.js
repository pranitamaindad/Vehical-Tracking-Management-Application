import { createSlice } from "@reduxjs/toolkit";

const vehiclemanagementSlice=createSlice({
  name:"addvehicle",
  initialState:{data:[{id:1,vehiclebrand:'',vehiclemodel:'',vehiclenumber:''}]},
  reducers:{
    addvehicle:(state,action)=>{
     state.data.push( action.payload)

      // const newtext={
      //   id:1,
      //   vehiclebrand:action.payload,
      //   vehiclemodel:action.payload,
      //   vehiclenumber:action.payload,
      // }
      // state.data.push(newtext)
    }
  }
})
export const {addvehicle}=vehiclemanagementSlice.actions
export default vehiclemanagementSlice.reducer;