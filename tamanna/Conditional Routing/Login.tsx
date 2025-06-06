// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Login:React.FC<{setIsLoggedIn: (val: boolean) => void}>=({ setIsLoggedIn })=>{

//      const navigate = useNavigate();

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     navigate("/dash");
//   };

//     return<>
//     <div>
//       <h2>Login Page</h2>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//     </>
// }
// export default Login

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// it is a array of object
const users = [
  { email: "user1@example.com", password: "password123" },
  { email: "admin@example.com", password: "admin123" },
]

const Login: React.FC<{ setIsLoggedIn: (val: boolean) => void }> = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    )

    if (matchedUser) {
      setIsLoggedIn(true);
      navigate("/dash");
    } else {
      setError("You are not registered");
    
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "300px" }}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  )
}

export default Login;
