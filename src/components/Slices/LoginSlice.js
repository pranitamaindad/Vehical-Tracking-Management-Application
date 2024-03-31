import { createSlice } from "@reduxjs/toolkit";

const loginSlice=createSlice({
  name:'login',
  initialState:{data:[]},

  reducers:{
    addlogin:(state,action)=>{
      state.data=[...action.payload]
    }
  }
})
export const {addlogin}=loginSlice.actions
export default loginSlice.reducer