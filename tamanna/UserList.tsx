import React, { useState } from "react";
import { IUser } from "../models/IUser";

interface IState{
    users:IUser[]
}
const UserList: React.FC=()=>{

    const [state,setState]=useState<IState>({
        users:[
            {sn:1,name:"tanu",age:8},
        {sn:2,name:"aonu",age:58},
        {sn:3,name:"ayush",age:9},
        {sn:4,name:"vidhi",age:6},
            
        ]
    })

    return(
        <>
        <div className="container">
            <div className="row w-50 mt-4">
                   <h4>looping</h4>
                   <table className="table">
  <thead>
    <tr>
      <th scope="col">S.n</th>
      <th scope="col">Name</th>
      <th scope="col">age</th>
      
    </tr>
  </thead>
  <tbody>
   {state.users.length>0&& state.users.map(user=>(
    <tr key={user.sn}>
         <td>{user.sn}</td>
          <td>{user.name}</td>
           <td>{user.age}</td>
    </tr>
   
   ))}
  </tbody>
</table>

            </div>
        </div>
        </>
    )
}
export default UserList