import React, { useState } from "react";
import { Iemployee } from "./employeeType";
import "./addEmployee.css"

type Props={
    data:Iemployee,
     onBackButtonClick:()=>void,
     onUpdateClickHndlr:(data:Iemployee)=>void
}

const EditEmployee = (props:Props)=>{

    const {data,onBackButtonClick,onUpdateClickHndlr} = props

const [fristName,setFristName]=useState(data.fristName);
    const [lastName,setLastName]=useState(data.lastName);
    const [email,setEmail]=useState(data.email);

     const onFristNameCngHndlr=(e:any)=>{
       setFristName(e.target.value)
    }
    const onLastNameCngHndlr=(e:any)=>{
       setLastName(e.target.value)
    }
    const onEmailCngHndlr=(e:any)=>{
       setEmail(e.target.value)
    }

    const onSubmitBTNClickHndlr=(e:any)=>{
        e.preventDefault();
        const tempdata:Iemployee={
        id:data.id,
        fristName:fristName,
        lastName:lastName,
        email:email
        }
   onUpdateClickHndlr(tempdata);
   onBackButtonClick();
    }

    return(
        <>
        <div className="head-cont">
            <h1>Add Employee</h1>
                 
        

        <form onSubmit={onSubmitBTNClickHndlr}>
            <div> <label htmlFor="">Frist name : </label>
            <input type="text" value={fristName} onChange={onFristNameCngHndlr}></input></div>
            <div><label htmlFor="">Last name : </label> 
            <input type="text"  value={lastName} onChange={onLastNameCngHndlr}></input>
</div>
            <div><label htmlFor="">Email : </label>
            <input type="text" value={email} onChange={onEmailCngHndlr}></input></div>
       
        <div>
            <input type="button"  value="Back " onClick={onBackButtonClick}/>
            <input type="submit"  value="Update Employee" />
        </div>
            
            
        </form>
         </div>
        </>
    )
}
export default EditEmployee