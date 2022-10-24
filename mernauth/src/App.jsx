import React from "react";
import Signup from "./components/signup/Signup";
import {Route,Routes,Navigate} from 'react-router-dom'
import Dashboard from "./components/dashboard/Dashboard";
import Signin from "./components/signin/Signin";

function App() {
  const user = localStorage.getItem("token")
  return (
    <>
    <Routes>
      {user && <Route path="/" exact element={<Dashboard/>}/>}
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/login" exact element={<Signin/>}/>
      <Route path="/" exact element={<Navigate replace to="/login"/>}/>
    </Routes>
      

    </>
  );
}

export default App;
