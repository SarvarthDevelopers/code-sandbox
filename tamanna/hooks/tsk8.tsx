import React, { memo, useState } from "react";

const Expensive:React.FC=memo(()=>{


    const sum=()=>{
          let i=0
          for(i=0;i<=1000000000;i++){
            i += 1;

          }
          return i;
    }

    const total=sum();

    return(
        <>
        <h1>use memo hook</h1>
        <p>sum:{total}</p>
        </>
    )
});


const ParentComponent:React.FC=()=>

    {
        const [count,setCount ]=useState(0);

    return(
        <>
        <div>
            <Expensive />
            <button onClick={()=>setCount(count+1)}>click me</button>
            <p>parrent redender:{count}</p>
        </div>
        </>
    )
}
export default ParentComponent