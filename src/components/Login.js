import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addlogin } from "./Slices/LoginSlice";


const Login = () => {
  const selector=useSelector((state)=>state.login.data)
  const dispatch=useDispatch()

const [info,setInfo]=useState()

  const navigate = useNavigate();
  const email = "demo@gmail.com"
const password = "demo123"

  const handleloginclick = (e) => {
    // axios.post('http://localhost:3000/login',{...mail})
    // .then(response => {
    //   // Handle successful response
    //   console.log('Response:', response.data);   
    if(info.email===email && info.password===password){
    setInfo('pranita')
    navigate("/");
    }
      }

  // const handleemailchange=(e)=>{
  //   email[e.target.email]=e.target.value
  //   setInfo(e.target.value)
  //   setInfo({...email})

  // }
  // const handlepasschange=(e)=>{
  //   password[e.target.email]=e.target.value
  //   setInfo(e.target.value)
  //   setInfo({...password})

  // }
  // useEffect(()=>{
  //   axios.get('http://localhost:3000/login')
  //   .then((res)=>{dispatch(addlogin(res.data))})
   
  // })
  // },[])

  return (
    <div class=" flex w-full max-w-xs justify-center  ">
    <form class="bg-slate-950 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col align-middle
     justify-center">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input onChange={(e)=>setInfo(previousInfo => ({...previousInfo, email: e.target.value}))} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input onChange={(e)=>setInfo(previousInfo => ({...previousInfo, password: e.target.value}))} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button onClick={handleloginclick} class="bg-cyan-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
  
  </div>
  );
};

export default Login;
