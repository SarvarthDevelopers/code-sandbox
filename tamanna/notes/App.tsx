

import React, { useState } from 'react';
import Home from './pages/home/home';
import { ThemeContext } from './context/theme/theme';
import Switch from 'react-switch'
// import ReactSwitch from 'react-switch';
import './App.css';


function App() {

  const [theme,settheme]=useState('dark')
  const [checked,setcheked]=useState(false)

  const changeHandler=(checke:boolean)=>{
    setcheked(!checked);
    if(checked){
      settheme('dark')
    }
    else{
       settheme('light')
    }

  }

  return (
    <ThemeContext.Provider value={theme}>
<Switch onChange={changeHandler} checked={checked}
className='react-swich'
></Switch>
{/* <ReactSwitch onChange={changeHandler} checked={checked} /> */}

    <Home></Home>
    </ThemeContext.Provider>
  )
}
export default App;

