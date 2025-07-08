import React, { useState } from 'react';

import './App.css';
import { Primary } from './component/primary';

import { Secandary } from './component/secandary';
import { CustomCheckbox } from './component/checkbox';
import { Profile } from './component/profile';
import { Dash } from './component/dashBoard';
import { CustomRadio } from './component/radio';

function App() {

   const [selected, setSelected] = useState("option1");
  return (
    
  <>
  <h1>hii</h1>
  <Primary />
  <br/>
  <Secandary />
  <br/>
  <Profile />
  <br/>
  <Dash />
  <div>
    <div style={{ display: "flex", gap: "20px" }}>
      <CustomCheckbox />
       <CustomCheckbox />
       <br/>
      <CustomRadio
        name="choice"
        value="option1"
        checked={selected === "option1"}
        onChange={setSelected}
      />
      <CustomRadio
        name="choice"
        value="option2"
        checked={selected === "option2"}
        onChange={setSelected}
      />
    </div>
  </div>
  </>

  );
}

export default App;
