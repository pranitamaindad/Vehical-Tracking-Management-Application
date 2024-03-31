import { createSlice } from "@reduxjs/toolkit";

const driverSlice=createSlice({
  name:"addvehicle",
  initialState:{data:[{id:1,drivername:'',address:'',phonenumber:''}]},
  reducers:{
    adddriver:(state,action)=>{
      state.data.push( action.payload)
      // const newtext={
      //   id:1,
      //   drivername:action.payload,
       
      // }
      // state.data.push(newtext)
    }
  }
})
export const {adddriver}=driverSlice.actions
export default driverSlice.reducer;