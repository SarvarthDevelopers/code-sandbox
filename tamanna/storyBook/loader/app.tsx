import React from 'react';
import './App.css';
// import Loader from './components/loader';
import Loader from './Component/loader';


function App() {
  return (
    <div className="App">
      {/* <h1>Satara Marathon Platform</h1> */}

      {/* Use your loader here */}
      <Loader size="large" showLabel={true} label="Loading..." showBG={true} />
    </div>
  );
}

export default App;
