import React, { useEffect, useState } from "react"
import {Iemployee, pageEnum} from "./employeeType"
import "./home.css"
import EmployeeList from "./employeeList"
import AddEmployee from "./addEmployee"
import EditEmployee from "./editEmployee"

const Home:React.FC=()=>{

    const [employeeList,setEmployeeList]=useState([] as Iemployee[]);
    const [showPage,setShowPage] =useState(pageEnum.list)
    const [dataToEdit,setDataToEdit]= useState({} as Iemployee)

    useEffect(()=>{
       const listINString= window.localStorage.getItem("employeeList")
       if(listINString){
        _setEmployeeList(JSON.parse(listINString));
       }
    },[])

    const onAddEmployeeClick=()=>{
        setShowPage(pageEnum.add)
    }
    const onBackButtonClickhand=()=>{
        setShowPage(pageEnum.list)
    }

    const _setEmployeeList=(list:Iemployee[])=>{
        setEmployeeList(list);
        window.localStorage.setItem("employeeList",JSON.stringify(list))
    }

    const addEmployeedata=(data:Iemployee)=>{
        _setEmployeeList([...employeeList,data])
    }

    const deleteEmployee=(data:Iemployee)=>{
       const indexdelete=employeeList.indexOf(data);
       const tempList=[...employeeList];
       tempList.splice(indexdelete,1);
       _setEmployeeList(tempList)
       
    }

    const editEmployeeData=(data:Iemployee)=>{
setShowPage(pageEnum.edit);
setDataToEdit(data)
    }

    const updateData=(data:Iemployee)=>{
        const filterData=employeeList.filter(x=> x.id === data.id)[0];
        const indexOfRecord=employeeList.indexOf(filterData);
        const tempData=[...employeeList];
        tempData[indexOfRecord]=data;
           _setEmployeeList(tempData)
    }

  return(
    <>
    <article className="head">
        <header >
        <h1>React : CRUD Application</h1>
    </header>
    </article> 
    <section className="sec">
 
        {showPage===pageEnum.list && <>
        <input type="button" value="Add Employee" onClick={onAddEmployeeClick} className="btn"/>
        <EmployeeList list={employeeList} onDeleteClickHndlr={deleteEmployee} onEdit={editEmployeeData}/>
        </>  }

         {showPage===pageEnum.add && <>
        <AddEmployee onBackButtonClick={onBackButtonClickhand} onSubmitClickHndlr={addEmployeedata}/>
        </>  }
        
        {showPage===pageEnum.edit && <EditEmployee data={dataToEdit} onBackButtonClick={onBackButtonClickhand} onUpdateClickHndlr={updateData}/>}

    </section>
    </>
  )

}
export default Home