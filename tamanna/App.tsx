import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Users from './component/Users';
import About from './component/About';
import Login from './component/tsk6';
import Navbar from './component/Navbar';
// import AuthUser from './component/auth';
// import UserList from './component/UserList';
// import UseEff from './component/tsk7';
// import Param from './component/tsk5';
// import Counter from './component/tsk4';
// import Customer from './component/tsk1';
// import { Users } from './component/tsk2';
// import Customer from './component/tsk3';

function App() {
  return (
    <>

    {/* <div > */}
      {/* <h1>raect + type script</h1> */}
      {/* <Customer name=" tanu"  /> */}
      {/* <Users userid={1} username="tanuji" /> */}
       {/* <Customer name=" tanu" id={8765} /> */}
       {/* <Counter /> */}
       {/* <Param /> */}
      {/* <Login /> */}
      {/* <UseEff /> */}
      {/* <AuthUser /> */}
      {/* <UserList /> */}
      {/* <Users /> */}
    {/* </div> */}
        
        <Navbar />
      <Routes>
      <Route path= "/" element={<Users />}/>
         <Route path= "/about" element={<About />}/>
      <Route path= "/login" element={<Login />}/>
    </Routes>
    

    </>
    
  );
}

export default App;
