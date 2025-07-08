import React from "react";
import "./primary.css"
import { GoArrowRight } from "react-icons/go";



export const Primary:React.FC=()=>{
return(
    <>
    <button className="btn">Primary CTA <GoArrowRight className="icon"/></button>
    {/* <i className="fa-solid fa-arrow-right"></i> */}
    </>
)
}