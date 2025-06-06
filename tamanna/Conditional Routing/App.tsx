import React, { useState } from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbarr from './component/nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import About from './pages/about';
import Service from './pages/service';
import Profile from './pages/profile';
import Setting from './pages/setting';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Navbarr isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="/dash" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>} />
          
          <Route path="/profile" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile />
            </ProtectedRoute>} />

            <Route path="/setting" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
              <Setting />
            </ProtectedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
