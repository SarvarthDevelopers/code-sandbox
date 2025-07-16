import React from 'react';
import './App.css';
import TextInput from './Component/TextInput';
import Button from './Component/Button';
import { Primary } from './Component/primary';


function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <div className="App">
      <TextInput lable="name" placeholder='enter name' backgroundColor='red'/>
      <TextInput lable="Last name" placeholder='enter last name' backgroundColor='blue'/>

      {/* <Button
        label="Click Me"
        onClick={handleClick}
        variant="primary"
        size="medium"
        color='blue'
      /> */}
      {/* <Primary label='button' backgroundColor='blue'/> */}
      </div>
  );
}
 
export default App;
