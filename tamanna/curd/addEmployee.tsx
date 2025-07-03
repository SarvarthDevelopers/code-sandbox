import { useState } from "react"
import "./addEmployee.css"
import { Iemployee } from "./employeeType"

type Props={
    onBackButtonClick:()=>void,
    onSubmitClickHndlr:(data:Iemployee)=>void
}
const AddEmployee=(props:Props)=>{

    const [fristName,setFristName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");

    const{onBackButtonClick,onSubmitClickHndlr}=props;

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
        const data:Iemployee={
        id:new Date().toJSON().toString(),
        fristName:fristName,
        lastName:lastName,
        email:email
        }
   onSubmitClickHndlr(data);
   onBackButtonClick();
    }
    return (
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
            <input type="submit"  value="Add Employee" />
        </div>
            
            
        </form>
         </div>
        </>
    )
}
export default AddEmployee