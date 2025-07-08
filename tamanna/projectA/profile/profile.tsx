import React from "react";
import "./profile.css"
import { IoPersonOutline } from "react-icons/io5";

 export const Profile:React.FC=()=>{
return(
    <>
    <button className="Pbtn"> <IoPersonOutline className="Picon"/> My Profile</button>
    {/* <i className="fa-solid fa-arrow-right"></i> */}
    </>
)
}