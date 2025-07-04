import "./employeeModel.css";
import { Iemployee } from "./employeeType";

type Props={
    onclose:()=> void,
    data:Iemployee

}

const EmployeeModel = (props:Props)=>{

    const {onclose,data}=props
return(
        <>
<div id="myModal" className="modal">
  <div className="modal-content">
    <span className="close" onClick={onclose}>&times;</span>
    <div>
        <h3>Employee Data</h3>
          <div>
            <label>Frist Name : {data.fristName}</label><br/>
             <label>Last Name : {data.lastName}</label><br/>
              <label>Email : {data.email}</label><br/>

              
          </div>
    </div>
  </div>
</div>
        </>
    )

}
export default EmployeeModel;