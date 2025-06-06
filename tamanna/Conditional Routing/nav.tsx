import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
}

const Navbarr:React.FC<NavbarProps>=({isLoggedIn,setIsLoggedIn})=>{

    const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

    return<>
    
         <nav style={{ display: "flex", gap: "1rem", paddingRight:"8rem", paddingLeft:"11rem" , background: "#f0f0f0" }}>
                 
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/service'>Service</Link>

        {isLoggedIn ? (
        <>
          <Link to="/dash">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/setting">Setting</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    
         </nav>
   
    
    </>
}
export default Navbarr