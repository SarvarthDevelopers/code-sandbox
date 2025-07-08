import React from "react";
import "./dashBoard.css"
import { RxDashboard } from "react-icons/rx";

 export const Dash:React.FC=()=>{
return(
    <>
    <button className="Dbtn"> <RxDashboard className="Dicon"/> Dashboard</button>
    
    </>
)
}