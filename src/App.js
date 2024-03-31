import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Sidebar from "./components/common/Sidebar";
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>Hello</div>
      {/* <Login></Login> */}
      {/* <Sidebar></Sidebar> */}
    
    </div>
  );
}

export default App;
